import React from "react";

import { select, color } from "@storybook/addon-knobs";

import { Spacing } from "@lust/foundation";

import Color from "./Color";

// css
import '@lust/scss/lib/Utilities.css'

export default {
    title: 'Color'
}

export const Common = () => (
    <Color 
        hexCode={color('HexCode', 'pink')} 
    />
);

export const CustomDimension = () => (
    <Color 
        hexCode={color('HexCode', 'pink')} 
        width={select('width', Object.values(Spacing), 'xxl')} 
        height={select('height', Object.values(Spacing), 'xxl')} 
    />
);