import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, NavigateBackButton, Question, Title, Form } from './styles';

const SignIn = () => {
  const { goBack } = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = useCallback(() => {
    signIn();
  }, [signIn]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <NavigateBackButton onPress={navigateBack}>
        <Feather name="chevron-left" size={25} color="#fff" />
      </NavigateBackButton>

      <Question>Already have an account?</Question>
      <Title>Just sign in</Title>

      <Form>
        <Input icon="user" placeholder="Email" style={{ marginTop: 45 }} />
        <Input icon="lock" placeholder="Password" />
        <Button onPress={handleSignIn}>Enter</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
