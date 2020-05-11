import { LabelHTMLAttributes } from 'react';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export interface LabelInterface extends LabelProps, DefaultPrivateProps {}
