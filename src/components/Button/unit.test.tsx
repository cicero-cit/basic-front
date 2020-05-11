import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

interface Setup {
  button: HTMLButtonElement;
}

describe('<Button />', () => {
  const mockTestId = 'testId';
  const mockOnClick = jest.fn();

  const setup = (): Setup => {
    const utils = render(
      <Button testId={mockTestId} onClick={mockOnClick}>
        Click me
      </Button>,
    );

    const button = utils.getByText('Click me') as HTMLButtonElement;

    return {
      button,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { button } = setup();

    expect(button.hasAttribute('data-testid')).toBe(true);
    expect(button.getAttribute('data-testid')).toBe(`${mockTestId}-button`);
  });

  test('Simula o click do botão', () => {
    const { button } = setup();

    fireEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
