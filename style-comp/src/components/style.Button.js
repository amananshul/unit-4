import styled from 'styled-components'

export const StyledButton=styled.button`
background-color: ${(props)=>props.varient==='outline'?'#4CAF50':'white'};
border:${(props)=>props.varient==='outline'?'2px':''}; 
color: ${(props)=>props.varient==='outline'?'#FFF':'#4CAF50'};
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;`
export const FancyButton =styled(StyledButton)`
background-color:aqua;
border : 3px solid black`

export const DarkButton =styled(StyledButton)`
border:2px solid ${(props=>props.theme.dark.primary)};
background-color: ${(props=>props.theme.dark.primary)};
color:${(props)=>props.theme.dark.text};`