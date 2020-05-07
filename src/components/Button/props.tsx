import { ButtonHTMLAttributes } from 'react';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonInterface extends ButtonProps, DefaultPrivateProps {}
