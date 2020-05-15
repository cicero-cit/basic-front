import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { ToastProvider, useToast } from '../toast';
import Button from '../../components/Button';

describe('<ToastContext />', () => {
  const ToastButton = (): JSX.Element => {
    const { addToast } = useToast();

    const onClick = (): void =>
      addToast({
        type: 'success',
        title: 'Title test',
        description: 'Description',
      });

    return <Button onClick={onClick} testId="add-toast" />;
  };

  const setup = (): RenderResult => {
    return render(
      <div data-testid="toast-context">
        <ToastProvider>
          <ToastButton />
        </ToastProvider>
      </div>,
    );
  };

  test('Adiciona E remove um toast', () => {
    const ToastContext = setup();

    const AddToastButton = ToastContext.getByTestId('add-toast-button');

    fireEvent.click(AddToastButton);

    expect(
      ToastContext.getByTestId('toastContext-toastList-toastItem-0'),
    ).toBeDefined();

    const CloseButton = ToastContext.getByTestId(
      'toastContext-toastList-toastItem-0-closeButton',
    );

    fireEvent.click(CloseButton);
  });
});
