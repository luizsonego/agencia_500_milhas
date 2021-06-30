import styled from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
  background: ${(props) => props.backgroundColor};
  ${(props) => props.blur && 'backdrop-filter: blur(4px);'}
  transition: ease-in-out 0.9s;

  &:hover {
    transition: ease-in-out 0.53s;
  }
`;

export const StyledTitle = styled.p`
  font-size: 23px;
  font-weight: 600;
  color: ${props => props.theme.colors.prymary_text};
  text-shadow: 1px 1px 5px #555;
`
export const StyledSubTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.colors.prymary_text};
  text-shadow: 1px 1px 5px #555;
`
