import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  let component: ShallowWrapper;
  const clickFnMock = jest.fn();
  const testIdMock = 'mocked-id';
  const classNameMock = 'mocked-class';

  beforeEach(() => {
    component = shallow(
      <Button
        testId={testIdMock}
        onClick={clickFnMock}
        className={classNameMock}
      >
        Click me
      </Button>,
    );
  });

  afterEach(() => {
    clickFnMock.mockClear();
  });

  it('Deve renderizar o componente', () => {
    expect(component.html().includes('<button ')).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('Deve exibir o label corretamente', () => {
    expect(component.text()).toEqual('Click me');
  });

  it('Deve exibir o label com icone corretamente', () => {
    const mockIcon = 'icon-mock';

    expect(component.html().includes('<i ')).toBeFalsy();
    component.setProps({ icon: mockIcon });
    expect(component).toBeDefined();
  });

  it('Deve desabilitar o botao', () => {
    component.setProps({ disabled: true });

    expect(component.prop('disabled')).toEqual(true);
  });

  it('Deve possuir um id de teste do componente', () => {
    component.setProps({ index: 0 });

    expect(
      component.find(`[data-testid="${testIdMock}-button"]`).exists(),
    ).toBeFalsy();
    expect(
      component.find(`[data-testid="${testIdMock}-button-0"]`).exists(),
    ).toBeTruthy();
  });

  it('Deve disparar o evento click do botão', () => {
    expect(clickFnMock).not.toBeCalled();
    component.simulate('click');
    expect(clickFnMock).toBeCalledTimes(1);
  });

  it('Deve possuir uma classe css', () => {
    expect(component.find('.button-component')).toBeTruthy();
  });
});
