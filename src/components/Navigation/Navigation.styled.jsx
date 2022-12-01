import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  &.active,
  &:hover {
    color: ${props => props.theme.colors.raspberry};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  padding: 16px;
  font-size: 20px;
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
