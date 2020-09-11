import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin-top: 40px;
  width: 100%;
  height: 55px;

  align-items: center;
  justify-content: center;
  background: #2573d5;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 16px;
  color: #fff;
`;
