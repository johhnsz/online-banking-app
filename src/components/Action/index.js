import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, ActionText, Icon } from './styles';

const Action = ({ icon, text }) => {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name={icon} size={20} color="#222844" />
      </TouchableOpacity>
      <ActionText>{text}</ActionText>
    </Container>
  );
};

export default Action;
