import React from 'react';
import { render } from '@testing-library/react';
import Label from '.';

interface Setup {
  label: HTMLSpanElement;
}

describe('<Label />', () => {
  const mockTestId = 'testId';

  const setup = (): Setup => {
    const utils = render(<Label testId={mockTestId}>Im a label</Label>);

    const label = utils.getByText('Im a label') as HTMLSpanElement;

    return {
      label,
    };
  };

  test('Componente deve ser renderizado', () => {
    const { label } = setup();

    expect(label.hasAttribute('data-testid')).toBe(true);
    expect(label.getAttribute('data-testid')).toBe(`${mockTestId}-label`);
  });
});
