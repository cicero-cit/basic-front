import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FiMail } from 'react-icons/fi';
import IconButton from '.';

interface Setup {
  iconButton: HTMLButtonElement;
}

describe('<IconButton />', () => {
  const mockTestId = 'testId';
  const mockOnClick = jest.fn();

  const setup = (): Setup => {
    const utils = render(
      <IconButton icon={FiMail} testId={mockTestId} onClick={mockOnClick} />,
    );

    const iconButton = utils.getByTestId(
      `${mockTestId}-iconButton`,
    ) as HTMLButtonElement;

    return {
      iconButton,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { iconButton } = setup();

    expect(iconButton.hasAttribute('data-testid')).toBe(true);
    expect(iconButton.getAttribute('data-testid')).toBe(
      `${mockTestId}-iconButton`,
    );
  });

  test('Simula o click do botão', () => {
    const { iconButton } = setup();

    fireEvent.click(iconButton);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
