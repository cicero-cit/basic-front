import { setTestId } from '../getTestId';

describe('getTestId', () => {
  test('Deve obter o test id', () => {
    const testId = setTestId({ name: 'button', testId: 'home' });

    expect(testId).toBe('home-button');
  });

  test('Deve obter o test id com index', () => {
    const testId = setTestId({ name: 'button', testId: 'home', index: 0 });

    expect(testId).toBe('home-button-0');
  });
});
