/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'

const headerStyle = {
  // from style
  backgroundColor: 'text',
  paddingTop: 4,
  color: 'background',
  fontSize: 4,
  fontWeight: 'bold'
}

const Header = () => {
  return (
    <div sx={headerStyle}>
      <Container variant="center">
        {/* todo 待抽离配置*/}
        <div>Way to Go</div>
        <div>
          <span>主页</span>
          <span>归档</span>
          <span>私人云盘</span>
        </div>
      </Container>
    </div>
  )
}

export default Header
