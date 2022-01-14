import {render, cleanup, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DisplayFile from '../../types/DisplayFile';
import FileList from './FileList';

afterEach(cleanup);

function generateTestFiles(both = false) {
    const testFile1 = {checked: false, name: "Test", status: "available", path: "root/documents/doc.txt", device: "Greyjoy"}
    const testFile2= {...testFile1, device: "Tyrell", status: "scheduled", checked: true}
    const testFiles = [testFile1]
    if(both) testFiles.push(testFile2)
    return testFiles as DisplayFile[]
}

test('updates the selected status of a row on click', () => {
  render(<FileList displayFiles={generateTestFiles()} />)
  let unselect = screen.queryAllByTitle('Not Selected')
  let select = screen.queryAllByTitle('Is Selected')
  expect(unselect).toHaveLength(1)
  expect(select).toHaveLength(0)
  userEvent.click(unselect[0])
  unselect = screen.queryAllByTitle('Not Selected')
  select = screen.queryAllByTitle('Is Selected')
  expect(unselect).toHaveLength(0)
  expect(select).toHaveLength(1)
})


test('updates the selected count on click', async () => {
    render(<FileList displayFiles={generateTestFiles()} />)
    const row = await screen.findByTestId("row-0")
    expect(await screen.findByRole("note")).toHaveTextContent("Selected 0")
    userEvent.click(row)
    expect(await screen.findByRole("note")).toHaveTextContent("Selected 1")
    userEvent.click(row)
    expect(await screen.findByRole("note")).toHaveTextContent("Selected 0")
})

test('only enables the download button when an available file is selected', async () => {
    render(<FileList displayFiles={generateTestFiles(true)} />)
    const unselect = screen.queryAllByTitle('Not Selected')
    const select = screen.queryAllByTitle('Is Selected')
    // the scheduled file is selected, the available one is not
    const but = await screen.findByRole("button")
    expect(unselect).toHaveLength(1)
    expect(select).toHaveLength(1)
    expect(but).toBeDisabled()
    const avail = screen.getByText('available')
    userEvent.click(avail)
    // now the available file is selected too
    expect(but).toBeEnabled()
})

test('alerts the user about downloaded files', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    render(<FileList displayFiles={generateTestFiles()} />)
    const but = screen.getByRole("button")
    expect(but).toBeDisabled()
    const avail = screen.getByText('available')
    userEvent.click(avail)
    // now the button is enabled
    userEvent.click(but)
    expect(window.alert).toBeCalledWith(`Downloaded files:\nFile 1: from device Greyjoy at path root/documents/doc.txt`)
})

test('alerts the user about scheduled files when they are selected on download', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    render(<FileList displayFiles={generateTestFiles(true)} />)
    const but = await screen.findByRole("button")
    expect(but).toBeDisabled()
    const avail = screen.getByText('available')
    userEvent.click(avail)
    // now the button is enabled
    userEvent.click(but)
    expect(window.alert).toBeCalledWith(`Downloaded files:\nFile 1: from device Greyjoy at path root/documents/doc.txt\n\nNOTE: Only available files can be downloaded.`)
})

test('properly updates selected status via selectall', async () => {
    render(<FileList displayFiles={generateTestFiles(true)} />)
    const box = await screen.findByTitle("Toggle Select All")
    let unselect = screen.queryAllByTitle('Not Selected')
    let select = screen.queryAllByTitle('Is Selected')
    expect(unselect).toHaveLength(1)
    expect(select).toHaveLength(1)
    // some boxes are selected
    userEvent.click(box)
    select = screen.queryAllByTitle('Is Selected')
    unselect = screen.queryAllByTitle('Not Selected')
    expect(select).toHaveLength(2)
    expect(unselect).toHaveLength(0)
    userEvent.click(box)
    select = screen.queryAllByTitle('Is Selected')
    unselect = screen.queryAllByTitle('Not Selected')
    expect(select).toHaveLength(0)
    expect(unselect).toHaveLength(2)
})