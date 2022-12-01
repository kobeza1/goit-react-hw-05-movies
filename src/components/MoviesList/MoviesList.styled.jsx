import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesListStyled = styled.ul``;

export const MoviesItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const MovieLink = styled(NavLink)`
  &:hover {
    color: ${props => props.theme.colors.raspberry};
  }
`;
