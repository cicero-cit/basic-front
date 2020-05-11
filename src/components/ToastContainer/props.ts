import { ToastMessage } from '../../hooks/toast';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface ToastContainerProps {
  messages: ToastMessage[];
}

export interface ToastContainerInterface
  extends ToastContainerProps,
    DefaultPrivateProps {}
