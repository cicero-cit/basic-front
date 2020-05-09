import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Form, useField } from '@unform/core';
import { FiMail } from 'react-icons/fi';
import Input from './index';

interface Setup {
  input: HTMLInputElement;
  debug(): void;
  button: HTMLButtonElement;
}

describe('<Input />', () => {
  const onSubmitMock = jest.fn();
  const mockTestId = 'testId';

  const setup = (index?: number): Setup => {
    const utils = render(
      <Form onSubmit={onSubmitMock}>
        <Input testId={mockTestId} index={index} name="name" icon={FiMail} />
        <button type="submit">submit</button>
      </Form>,
    );

    const input = utils.getByLabelText('name') as HTMLInputElement;
    const button = utils.getByText('submit') as HTMLButtonElement;

    utils.debug();
    return {
      input,
      button,
      debug: utils.debug,
      ...utils,
    };
  };

  test('Componente deve ter index', () => {
    const { input } = setup(1);

    expect(input.hasAttribute('data-testid')).toBe(true);
    expect(input.getAttribute('data-testId')).toBe(`${mockTestId}-input-1`);
  });

  test('Simula digitação do input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '23' } });

    expect(input.value).toBe('23');
  });

  test('Simula o foco do input', () => {
    const { input } = setup();

    input.focus();
    expect(input).toHaveFocus();
  });

  test('Simula o on blur', () => {
    const { input } = setup();

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(input).not.toHaveFocus();
  });
});
