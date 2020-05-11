import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface AvatarProps {
  id: string;
  name: string;
  nickname: string;
  emoji: number;
  editContact(id: string): void;
  deleteContact(id: string): void;
}

export interface AvatarInterface extends AvatarProps, DefaultPrivateProps {}
