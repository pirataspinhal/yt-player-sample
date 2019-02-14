import React from 'react';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {
  Container,
  PlayerContainer,
  ControlsContainer,
  Button,
  Timer,
  ProgressBarContainer,
  ProgressBarHandle,
  ProgressBarCustom,
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

  it('ProgressBarContainer should render correctly without props', () => {
    const wrapper = shallow(<ProgressBarContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('ProgressBarHandle', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ProgressBarHandle />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with offset', () => {
      const wrapper = shallow(<ProgressBarHandle offset="50" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('ProgressBarCustom', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ProgressBarCustom />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with value', () => {
      const wrapper = shallow(<ProgressBarCustom value="50" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('ProgressBar', () => {
    console.error = jest.fn();
    const spy = jest.spyOn(global.console, 'error');

    it('should not render without value', () => {
      shallow(<ProgressBar />);
      expect(spy).toHaveBeenCalled();
    });

    it('should render correctly with value', () => {
      const wrapper = shallow(<ProgressBar value={50} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call onClick prop when clicked', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<ProgressBar onClick={onClick} value={50} />);
      wrapper.find(ProgressBarContainer).simulate('click', { pageX: 10, target: {} });
      expect(onClick.called).toBeTruthy();
    });
  });
});
