import React from 'react';
import { render } from '@testing-library/react';
import { ToastContext, ToastMessage } from '../../hooks/toast';
import ToastContainer from '.';

interface Setup {
  ToastList: HTMLDivElement;
}

describe('<ToastContainer />', () => {
  const mockTestId = 'testId';
  const addToast = jest.fn();
  const removeToast = jest.fn();
  const mockToasts: ToastMessage[] = [
    {
      id: '1',
      title: 'Title 1',
      description: 'Description 1',
      type: 'success',
    },
  ];

  const setup = (): Setup => {
    const utils = render(
      <ToastContext.Provider
        value={{
          addToast,
          removeToast,
        }}
      >
        <ToastContainer testId={mockTestId} messages={mockToasts} />
      </ToastContext.Provider>,
    );

    const ToastList = utils.getByTestId(
      `${mockTestId}-toastList`,
    ) as HTMLDivElement;

    return {
      ToastList,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { ToastList } = setup();

    expect(ToastList.hasAttribute('data-testid')).toBe(true);
    expect(ToastList.getAttribute('data-testid')).toBe(
      `${mockTestId}-toastList`,
    );
  });
});
