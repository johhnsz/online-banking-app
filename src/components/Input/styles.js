import styled, { css } from 'styled-components/native';
import { Feather as InputIcon } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background: #2e3552;
  border-width: 2px;
  border-color: #2e3552;

  height: 55px;
  margin: 10px 0;
  padding: 0 16px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #2573d5;
    `}
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#9f9f9f',
})`
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  margin-left: 10px;
  flex: 1;
  color: #fff;
`;

export const Icon = styled(InputIcon)``;
