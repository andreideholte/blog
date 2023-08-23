import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const Logo = () => {
  return (
    <>
      <Emoji>💾 </Emoji>
      <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
        {CONFIG.blog.title}
      </StyledWrapper>
    </>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
