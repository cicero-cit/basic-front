import React from 'react';
import { Container } from './styles';
import { ButtonInterface } from './props';
import { setTestId } from '../../utils/getTestId';

const Button: React.FC<ButtonInterface> = ({
  children,
  testId,
  index = null,
  ...rest
}) => {
  const getTestIdData = { testId, index, name: 'button' };

  return (
    <Container type="button" data-testid={setTestId(getTestIdData)} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
