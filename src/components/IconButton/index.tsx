import React from 'react';
import { Button } from './styles';
import { IconButtonInterface } from './props';
import { setTestId } from '../../utils/getTestId';

const IconButton: React.FC<IconButtonInterface> = ({
  icon: Icon,
  testId,
  ...rest
}) => {
  const buildTestId = { testId, name: 'iconButton', index: rest.index };

  return (
    <Button type="button" data-testid={setTestId(buildTestId)} {...rest}>
      <Icon />
    </Button>
  );
};

export default IconButton;
