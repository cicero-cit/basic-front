import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Avatar from '.';

interface Setup {
  avatar: HTMLDivElement;
  editButton: HTMLButtonElement;
  deleteButton: HTMLButtonElement;
}

describe('<Avatar />', () => {
  const mockTestId = 'testId';

  const mockId = '1';
  const mockName = 'Name';
  const mockNickName = 'Nickname';
  const mockEmoji = 0;
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();

  const setup = (): Setup => {
    const utils = render(
      <Avatar
        testId={mockTestId}
        id={mockId}
        name={mockName}
        nickname={mockNickName}
        emoji={mockEmoji}
        deleteContact={mockDelete}
        editContact={mockEdit}
      />,
    );

    const avatar = utils.getByTestId(`${mockTestId}-avatar`) as HTMLDivElement;

    const editButton = utils.getByTestId(
      `${mockTestId}-avatar-iconButton-0`,
    ) as HTMLButtonElement;

    const deleteButton = utils.getByTestId(
      `${mockTestId}-avatar-iconButton-1`,
    ) as HTMLButtonElement;

    return {
      avatar,
      editButton,
      deleteButton,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { avatar } = setup();

    expect(avatar.hasAttribute('data-testid')).toBe(true);
    expect(avatar.getAttribute('data-testid')).toBe(`${mockTestId}-avatar`);
  });

  test('Simula o click em editar', () => {
    const { editButton } = setup();

    fireEvent.click(editButton);

    expect(mockEdit).toBeCalledTimes(1);
  });

  test('Simula o click em excluir', () => {
    const { deleteButton } = setup();

    fireEvent.click(deleteButton);

    expect(mockDelete).toBeCalledTimes(1);
  });
});
