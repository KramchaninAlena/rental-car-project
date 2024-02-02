import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: flex-start;
gap: 20px;
padding-top: 40px;
margin-bottom: 50px;
`;

export const LinkStyled = styled(NavLink)`
padding: 10px 20px;

  border-radius: 12px;
  text-decoration: none;
  border: 1px solid #3470FF;

  &.active {
    background-color: #3470FF;
    color: white;
  }
`