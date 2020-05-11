import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { Container } from './styles';
import { useToast } from '../../../hooks/toast';
import { ToastInterface } from './props';
import { setTestId } from '../../../utils/getTestId';

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastInterface> = ({
  message,
  style = {},
  testId,
  index,
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  const testIdToastItem = setTestId({ name: 'toastItem', testId, index });

  return (
    <Container type={message.type} style={style} data-testid={testIdToastItem}>
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button
        data-testid={`${testIdToastItem}-closeButton`}
        onClick={() => removeToast(message.id)}
        type="button"
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
