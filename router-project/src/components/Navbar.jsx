import React from 'react'
// import { NavbarLink } from 'react-router-dom'
// import routes from'react-router-dom'
import { NavbarContainer,StyledNavText,NavbarLink } from '../styles/nav.styles'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavbarContainer>
          <StyledNavText>
            <NavbarLink to='/'>Home</NavbarLink>
          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/newarrivals'>New Arrivals</NavbarLink>
          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/furniture'>Furniture</NavbarLink>
          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/lightening'>Lightening</NavbarLink>
          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/accessories'>Accessories</NavbarLink>

          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/cart'>Cart</NavbarLink>

          </StyledNavText>
          <StyledNavText>
            <NavbarLink to='/login'>Login</NavbarLink>

          </StyledNavText>

        </NavbarContainer>
      </div>
    </nav>
  )
}





