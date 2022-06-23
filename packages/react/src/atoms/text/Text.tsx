import React from "react"

import { FontSize } from "@lust/foundation"

interface TextProps {
    size?: keyof typeof FontSize,
    children: React.ReactNode,
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `kust-text lust-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text