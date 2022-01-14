import {render, cleanup, screen} from '@testing-library/react'
import Row from './Row'

afterEach(cleanup);

const testFile1 = {checked: false, name: "Test", status: "available", path: "root/documents/doc.txt", device: "Greyjoy"}
const testFile2= {...testFile1, status: "scheduled", checked: true}
const updateSelect = jest.fn()

test('displays a green circle when available', async () => {
    render(<Row file={testFile1} index={2} updateSelect={updateSelect}/>)
    const circle = await screen.findByTestId("circle")
    expect(circle).toHaveClass('green')
})

test('displays no circle when not available', async () => {
    render(<Row file={testFile2} index={2} updateSelect={updateSelect}/>)
    const circle = await screen.findByTestId("circle")
    expect(circle).toHaveClass('clear')
})

test('informs user that it is selected when checked', async () => {
    render(<Row file={testFile2} index={2} updateSelect={updateSelect}/>)
    expect(await screen.findByTitle("Is Selected")).toBeInTheDocument()
})

test('informs user that it is not selected when not checked', async () => {
    render(<Row file={testFile1} index={2} updateSelect={updateSelect}/>)
    expect(await screen.findByTitle("Not Selected")).toBeInTheDocument()
})
