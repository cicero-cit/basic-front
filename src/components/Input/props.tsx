import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib/cjs';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  error?: string;
}

export interface InputInterface extends InputProps, DefaultPrivateProps {}
