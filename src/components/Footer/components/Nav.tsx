import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/address/0x5a99941a3614348E26214C840B3a630B8F1AC0Fd#code"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        PizzaSwap PIZZA-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/sqhXAqc">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/pizzaswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/pizzaswap">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@pizzaswapchef">
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
