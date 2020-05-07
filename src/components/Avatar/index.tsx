import React from 'react';
import { Container, Actions } from './styles';
import { AvatarInterface } from './props';
import { Emoticons } from '../../utils/emoticons';

const Avatar: React.FC<AvatarInterface> = ({
  id,
  name,
  nickname,
  deleteContact,
  editContact,
}) => {
  return (
    <Container>
      {Emoticons[Math.floor(Math.random() * 10)]}

      <p>{name}</p>
      <p>{nickname}</p>

      <Actions>
        <button type="button" onClick={() => editContact(id)}>
          <span role="img" aria-label="pencil">
            ✏️
          </span>
        </button>

        <button type="button" onClick={() => deleteContact(id)}>
          <span role="img" aria-label="pencil">
            🗑️
          </span>
        </button>
      </Actions>
    </Container>
  );
};

export default Avatar;
