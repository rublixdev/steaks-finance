import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
     
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xd58211d19f1A91a9a379D7BE4E20B4e4C3d42c17">Contract</StyledLink>

      <StyledLink target="_blank" href="https://t.me/steaksfinancechat">Telegram</StyledLink>    
    
      <StyledLink target="_blank" href="https://twitter.com/steaksfinance">Twitter</StyledLink>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: #ffffff;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'kandal';
  font-size: 14px;
  &:hover {
    color: #CC3E30;
  }
`

export default Nav
