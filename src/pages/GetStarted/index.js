import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title, Description, SignUpLink } from './styles';

const GetStarted = () => {
  const { navigate } = useNavigation();

  const navigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <Container>
      <Title>Let´s get started</Title>
      <Description>
        Never a better time than now to start thinking about how you manage all
        of your finances with ease
      </Description>

      <Button onPress={navigateToSignIn}>Login</Button>

      <TouchableOpacity>
        <SignUpLink>or Create account</SignUpLink>
      </TouchableOpacity>
    </Container>
  );
};

export default GetStarted;
