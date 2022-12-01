import {
  NavigationItem,
  NavigationList,
  StyledLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationItem>
          <StyledLink to={'/'}>Home</StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to={'movies'}>Movies</StyledLink>
        </NavigationItem>
      </NavigationList>
    </nav>
  );
};
