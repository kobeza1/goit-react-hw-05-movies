import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  //   display: flex;
  //   align-items: center;
`;

export const CastImage = styled.img`
  margin-bottom: 4px;
`;

export const CharacterName = styled.p``;

export const ActorName = styled.p`
  //   color: ${props => props.theme.colors.raspberry};
  font-weight: 700;
`;
