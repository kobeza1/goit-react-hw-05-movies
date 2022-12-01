import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsList = styled.ul``;

export const DetailsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  margin-bottom: 32px;
`;

export const TitleAd = styled.h3`
  margin-bottom: 16px;
`;

export const MovieImage = styled.img`
  margin-right: 16px;
`;

export const ButtonBack = styled.button`
  margin-bottom: 8px;
  background-color: white;
  color: gray;

  &:hover {
    color: ${props => props.theme.colors.raspberry};
  }
`;

export const ListAd = styled.ul`
  display: flex;
  margin-bottom: 16px;
`;

export const ListItemAd = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledLinkAd = styled(NavLink)`
  &.active,
  &:hover {
    color: ${props => props.theme.colors.raspberry};
  }
`;

// export const SectionAd = styled.section`
//   border-top: 2px solid ${props => props.theme.colors.beige};
// `;
