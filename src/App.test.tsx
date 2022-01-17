import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ApiPayload from './types/ApiPayload';
import { intakeData } from './utils/ApiPayloadUtils';

afterEach(() => {
  cleanup()
  jest.restoreAllMocks()
});

function generateAPIPayload(both = false): ApiPayload[] {
  const testFile1 = {name: "Test", status: "available", path: "root/documents/doc.txt", device: "Greyjoy"}
  const testFile2= {...testFile1, device: "<b onClick={alert('Wufff!')}>click me!</b>", status: "scheduled", checked: true}
  const testFiles = [testFile1]
  if(both) testFiles.push(testFile2)
  return testFiles as ApiPayload[]
}

test('renders learn react link', async () => {
  const mockIntake = jest.fn()
  mockIntake.mockImplementation(intakeData)
  render(<App intakeData={mockIntake} apiOutput={generateAPIPayload(true)}/>)
  expect(mockIntake).toBeCalledTimes(1)
  const escaped = await screen.findByText("<b onClick={alert('Wufff!')}>click me!</b>")
  expect(escaped).toBeInTheDocument()
  userEvent.click(escaped)
  expect(screen.queryAllByText('Wufff!').length).toBe(0)
});
