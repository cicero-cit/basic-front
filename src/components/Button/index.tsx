import React from 'react';
import { Container } from './styles';
import { ButtonInterface } from './props';
import { setTestId } from '../../utils/getTestId';

const Button: React.FC<ButtonInterface> = ({ children, testId, ...rest }) => {
  const getTestIdData = { testId, index: rest.index, name: 'button' };

  return (
    <Container type="button" data-testid={setTestId(getTestIdData)} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
