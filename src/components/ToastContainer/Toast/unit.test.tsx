import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Toast from '.';
import { ToastContext, ToastMessage } from '../../../hooks/toast';

interface Setup {
  ToastItem: HTMLDivElement;
  closeButton: HTMLButtonElement;
}

describe('<Toast />', () => {
  const mockTestId = 'testId';
  const addToast = jest.fn();
  const removeToast = jest.fn();
  const mockToast: ToastMessage = {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    type: 'success',
  };

  const setup = (): Setup => {
    const utils = render(
      <ToastContext.Provider
        value={{
          addToast,
          removeToast,
        }}
      >
        <Toast testId={mockTestId} message={mockToast} index={0} />
      </ToastContext.Provider>,
    );

    const ToastItem = utils.getByTestId(
      `${mockTestId}-toastItem-0`,
    ) as HTMLDivElement;

    const closeButton = utils.getByTestId(
      `${mockTestId}-toastItem-0-closeButton`,
    ) as HTMLButtonElement;

    return {
      ToastItem,
      closeButton,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { ToastItem } = setup();

    expect(ToastItem.hasAttribute('data-testid')).toBe(true);
    expect(ToastItem.getAttribute('data-testid')).toBe(
      `${mockTestId}-toastItem-0`,
    );
  });

  test('É removido um toast', () => {
    const { closeButton } = setup();

    fireEvent.click(closeButton);

    expect(removeToast).toHaveBeenCalledTimes(1);
  });

  test('É removido um toast depois de 3 segundos', () => {
    const { ToastItem } = setup();
    waitForElementToBeRemoved(ToastItem, {
      timeout: 5000,
      interval: 5000,
    }).then(() => {
      expect(removeToast).toHaveBeenCalledTimes(1);
      expect(removeToast).toHaveBeenCalledWith(mockToast.id);
    });
  });
});
