import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Container, Actions } from './styles';
import { AvatarInterface } from './props';
import { Emoticons } from '../../utils/emoticons';
import { setTestId } from '../../utils/getTestId';
import IconButton from '../IconButton';
import Label from '../Label';

const Avatar: React.FC<AvatarInterface> = ({
  id,
  name,
  nickname,
  emoji,
  deleteContact,
  editContact,
  testId,
  ...rest
}) => {
  const buildTestId = { testId, name: 'avatar', index: rest.index };

  return (
    <Container data-testid={setTestId(buildTestId)}>
      {Emoticons[emoji]}

      <Label testId={setTestId(buildTestId)}>{name}</Label>
      <Label testId={setTestId(buildTestId)}>{nickname}</Label>

      <Actions>
        <IconButton
          onClick={() => editContact(id)}
          icon={FiEdit}
          testId={setTestId(buildTestId)}
          index={0}
        />

        <IconButton
          onClick={() => deleteContact(id)}
          icon={FiTrash}
          testId={setTestId(buildTestId)}
          index={1}
        />
      </Actions>
    </Container>
  );
};

export default Avatar;
