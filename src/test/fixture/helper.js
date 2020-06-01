import { shallow } from 'enzyme';

export const wrapper = (Component) => shallow(Component);
export const toMatchSnapshotFunction = (Component) => {
  // console.log(Component)
  // console.log(<Header />)
  //const wrapper = shallow(Component);
  expect(wrapper(Component)).toMatchSnapshot();
};
