import { ToastMessage } from '../../../hooks/toast';
import { DefaultPrivateProps } from '../../../utils/DefaultPrivateProps';

export interface ToastProps {
  message: ToastMessage;
  style?: object;
}

export interface ToastInterface extends ToastProps, DefaultPrivateProps {}
