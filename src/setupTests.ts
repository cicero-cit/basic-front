import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).scrollTo = jest.fn();
