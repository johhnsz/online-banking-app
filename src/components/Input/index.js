import React, { useCallback, useState, useRef } from 'react';

import { Container, TInput, Icon } from './styles';

const Input = ({ icon, style, ...rest }) => {
  const inputValueRef = useRef({ value: '' });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container style={style} isFocused={isFocused}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={isFocused || isFilled ? '#2573d5' : '#9f9f9f'}
        />
      )}
      <TInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        keyboardAppearance="dark"
        onChangeText={value => (inputValueRef.current.value = value)}
        value={inputValueRef.value}
        {...rest}
      />
    </Container>
  );
};

export default Input;
