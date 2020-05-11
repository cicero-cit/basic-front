import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export interface IconButtonInterface
  extends IconButtonProps,
    DefaultPrivateProps {}
