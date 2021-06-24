import styled from 'styled-components'

export const ButtonPrimary = styled.a`
  background: linear-gradient(114deg, ${props => props.theme.colors.secondary_dark} 13.46%, ${props => props.theme.colors.secondary} 100.5%), ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.prymary_text};
  cursor: pointer;

  transition: all 0.3s ease;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,0.2),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  border: none;
  transition: all 0.5s ;

  &:hover {
    background: linear-gradient(228deg, ${props => props.theme.colors.secondary_dark} 13.46%, ${props => props.theme.colors.secondary} 100.5%), ${props => props.theme.colors.secondary};
    background-size: 450px;
    background-position-x: left;
    transition: all 0.5s ;
  }
`
