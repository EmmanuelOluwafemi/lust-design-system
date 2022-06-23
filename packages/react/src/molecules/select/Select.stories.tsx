import React from "react";

import Select from "./Select";

import { withA11y } from "@storybook/addon-a11y"

// css
import '@lust/scss/lib/Select.css'

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
]


export default {
    title: 'Select',
    decorators: [withA11y]
}

export const Common = () => <Select options={options} />

export const RenderOption = () => (
    <Select 
        options={options} 
        renderOption={({ getOptionRecommendedProps, option, isSelected }) => <span {...getOptionRecommendedProps()}>
        { option.label } {isSelected ? 'SELECTED!' : ''}</span>} 
    />)

export const CustomLabel = () => (
    <Select 
        label='Select a color'
        options={options} 
    />
)