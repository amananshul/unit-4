import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const NavbarContainer=styled.nav`
display:flex;
justify-content: space-around;
height:140px ;
width: 100%;
background-color: #dddddc;
z-index: -1;
}
`

export const NavbarLink = styled(Link)`
font-size: 1.7em;
line-height: 4.35;
margin: 0;
text-decoration: none;
font-family: sans-serif;
font-weight: 300;
position: relative;
`
export const StyledNavText = styled.li`
  
    padding: 0.313rem 1.8rem 0.313rem 2rem;
    display: flex;
    flex-direction: column;
`