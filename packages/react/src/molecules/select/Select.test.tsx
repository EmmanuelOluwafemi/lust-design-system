import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from "./Select";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
]

test('renders all options passed to it', () => {
    const { getAllByRole, getByTestId } = render(<Select options={options} />)

    fireEvent.click(getByTestId('LustSelectButton'))

    expect(getAllByRole('menuitemradio')).toHaveLength(options.length)
})

test('renders options using custom renderOption method if passed as prop', () => {
  const { getAllByTestId } = render(<Select options={options} renderOption={({ option, getOptionRecommendedProps }) => {
    return <li data-testid='customRenderOption' {...getOptionRecommendedProps()}>{option.label}</li>
  }} />)

  expect(getAllByTestId('customRenderOption')).toHaveLength(options.length)
})

test('calls the onOptionSelected prop with the selected option and its index if passed', () => {
  const onOptionSelected = jest.fn()
  const { getAllByRole, getByTestId } = render(<Select options={options} onOptionSelected={onOptionSelected} />)

  fireEvent.click(getByTestId('LustSelectButton'))

  fireEvent.click(getAllByRole('menuitemradio')[0])

  expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0)
})

test('the button label changes to the selected option label', () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />)

  fireEvent.click(getByTestId('LustSelectButton'))

  fireEvent.click(getAllByRole('menuitemradio')[0])

  expect(getByTestId('LustSelectButton')).toHaveTextContent(options[0].label)
})

test('snapshot of the selected option state', () => {
  const { getAllByRole, getByTestId, asFragment } = render(<Select options={options} />)

  fireEvent.click(getByTestId('LustSelectButton'))

  fireEvent.click(getAllByRole('menuitemradio')[0])

  expect(asFragment()).toMatchSnapshot()
})

test('snapshot of the base state', () => {
  const { asFragment } = render(<Select options={options} />)

  expect(asFragment()).toMatchSnapshot()
})

test('snapshot of the options menu open state', () => {
  const { getByTestId, asFragment } = render(<Select options={options} />)

  fireEvent.click(getByTestId('LustSelectButton'))

  expect(asFragment()).toMatchSnapshot()
})

test('can customize select label', () => {
  const { getByText } = render(<Select options={options} label="THIS IS A CUSTOM LABEL" />)

  expect(getByText(/THIS IS A CUSTOM LABEL/)).toBeInTheDocument()
})