import styled from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  margin: 0 12px;
`;

export const ActionText = styled.Text`
  margin-top: 8px;
  font-family: 'Poppins_500Medium';
  color: #85899a;
  font-size: 14px;
`;

export const Icon = styled(FeatherIcon)`
  background: #fff;
  padding: 14px;
  border-radius: 14px;
`;
