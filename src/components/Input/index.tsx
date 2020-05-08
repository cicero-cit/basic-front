import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import { setTestId } from '../../utils/getTestId';
import { InputInterface } from './props';

const Input: React.FC<InputInterface> = ({
  name,
  icon: Icon,
  testId,
  index = null,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const getTestIdData = { testId, index, name: 'button' };

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        data-testid={setTestId(getTestIdData)}
      />

      {error && <div className="error">{error}</div>}
    </Container>
  );
};

export default Input;
