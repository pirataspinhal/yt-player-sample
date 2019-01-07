import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {
  Container,
  PlayerContainer,
  ControlsContainer,
  Button,
  Timer,
  ProgressBar,
} from '../App.styles';

describe('Testing App.styles...', () => {
  configure({ adapter: new Adapter() });

  it('Container should render correctly without props', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('PlayerContainer', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<PlayerContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly as visible true', () => {
      const wrapper = shallow(<PlayerContainer visible />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('ControlsContainer should render correctly without props', () => {
    const wrapper = shallow(<ControlsContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Button should render correctly without props', () => {
    const wrapper = shallow(<Button />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Timer should render correctly without props', () => {
    const wrapper = shallow(<Timer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('ProgressBar should render correctly without props', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
