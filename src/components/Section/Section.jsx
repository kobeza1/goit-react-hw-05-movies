import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <>
      <section>
        <Container>{children}</Container>
      </section>
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
