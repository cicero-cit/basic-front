import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';
import Toast from './Toast';
import { ToastContainerInterface } from './props';
import { setTestId } from '../../utils/getTestId';

const ToastContainer: React.FC<ToastContainerInterface> = ({
  messages,
  testId,
}) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateZ(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
    },
  );

  const testIdToastList = setTestId({ name: 'toastList', testId });

  return (
    <Container data-testid={testIdToastList}>
      {messagesWithTransition.map(({ item, key, props }, index) => (
        <Toast
          message={item}
          style={props}
          key={key}
          testId={testIdToastList}
          index={index}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
