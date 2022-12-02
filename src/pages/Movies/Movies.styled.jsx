import styled from 'styled-components';

export const Input = styled.input`
  height: 36px;
  min-width: 300px;
  padding: 10px 14px;
  border: 1px solid ${props => props.theme.colors.beige};
  outline: none;
  margin-right: 8px;
  font-weight: 600;
  font-size: 16px;
  color: gray;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
