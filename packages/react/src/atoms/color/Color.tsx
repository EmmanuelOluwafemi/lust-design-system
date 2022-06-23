import React from "react"
import { Spacing } from '@lust/foundation'

interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing
}

const Color: React.FC<ColorProps> = ({ hexCode, width=Spacing.sm, height=Spacing.sm }) => {
    const className = `lust-width-${width} lust-height-${height}`

    return <div className={className} style={{
        backgroundColor: hexCode
    }}>

    </div>
}

export default Color