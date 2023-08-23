import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const Logo = () => {
  return (
    <>
      <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
        <Emoji>💾 </Emoji> {CONFIG.blog.title}
      </StyledWrapper>
    </>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
