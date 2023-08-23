import React, { ReactNode } from "react"
import { notoEmoji } from "src/assets"

type Props = {
  className?: string
  children?: ReactNode
}

export const Emoji = ({ className, children }: Props) => {
  return (
    <span className={className} css={[notoEmoji.style]}>
      {children}
    </span>
  )
}
