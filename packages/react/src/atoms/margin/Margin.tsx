import React from 'react'
import { Spacing } from '@lust/foundation'

export interface MarginProps {
    space?: keyof typeof Spacing
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean,
    children: React.ReactNode
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ``

    if (! left && ! right && ! top && ! bottom) {
        className = `lust-margin-${space}`
    }

    if (left) {
        className = `${className} lust-margin-left-${space}`
    }

    if (right) {
        className = `${className} lust-margin-right-${space}`
    }

    if (top) {
        className = `${className} lust-margin-top-${space}`
    }

    if (bottom) {
        className = `${className} lust-margin-bottom-${space}`
    }

    return <div className={className}>
        {children}
    </div>
}

export default Margin