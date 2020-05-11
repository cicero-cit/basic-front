import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FiMail } from 'react-icons/fi';
import Input from './index';

interface Setup {
  input: HTMLInputElement;
}

describe('<Input />', () => {
  const mockTestId = 'testId';
  const mockValue = 'Valor inicial';
  const mockOnChange = jest.fn();

  const setup = (error?: string): Setup => {
    const utils = render(
      <Input
        testId={mockTestId}
        name="name"
        icon={FiMail}
        error={error}
        value={mockValue}
        onChange={mockOnChange}
      />,
    );

    const input = utils.getByLabelText('name') as HTMLInputElement;

    return {
      input,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { input } = setup();

    expect(input.hasAttribute('data-testid')).toBe(true);
    expect(input.getAttribute('data-testid')).toBe(`${mockTestId}-input`);
  });

  test('Simula digitação do input', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: 'valor' } });

    expect(mockOnChange).toBeCalledTimes(1);
  });

  test('Simula o on blur', () => {
    const { input } = setup();

    const spyFocus = jest.spyOn(input, 'focus');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(spyFocus).not.toBeCalledTimes(1);
  });

  test('Simula o input com erro', () => {
    const { input } = setup('Nome já existe');

    const spyFocus = jest.spyOn(input, 'focus');

    input.focus();
    expect(spyFocus).toBeCalledTimes(1);
  });

  test('Simula o foco do input', () => {
    const { input } = setup();
    const spyFocus = jest.spyOn(input, 'focus');

    input.focus();
    expect(spyFocus).toBeCalledTimes(1);
  });
});
