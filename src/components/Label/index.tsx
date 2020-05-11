import React from 'react';
import { LabelContainer } from './styles';
import { LabelInterface } from './props';
import { setTestId } from '../../utils/getTestId';

const Label: React.FC<LabelInterface> = ({ children, testId, ...rest }) => {
  const getTestIdData = { testId, index: rest.index, name: 'label' };

  return (
    <LabelContainer data-testid={setTestId(getTestIdData)}>
      {children}
    </LabelContainer>
  );
};

export default Label;
