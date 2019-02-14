import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const PlayerContainer = styled.div`
  display: block;
  height: fit-content;
  width: fit-content;
  transition: 0.2s all ease;
  & > iframe { display: block; }

  ${props => (props.visible
    ? css`
      opacity: 1;
      pointer-events: initial;
      transform: translateY(0);
    `
    : css`
      opacity: 0;
      pointer-events: none;
      transform: translateY(-16px);
    `
  )}
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 640px;
  padding: 8px;
  & > * {
    margin: 8px;
  }
`;

export const Button = styled.i`
  display: block;
  width: 32px;
  height: 32px;
  color: #727272;
  cursor: pointer;
  transition: 0.2s transform ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Timer = styled.div`
  display: flex;
  color: #727272;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
`;

export const ProgressBarHandle = styled.div`
  position: absolute;
  opacity: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: -5px;
  left: ${props => props.offset || 0}%;
  transform: translateX(-5px);
  background: #EEEEEE;
  transition: all 100ms ease;
`;

export const ProgressBarCustom = styled.div`
  position: relative;
  height: 6px;
  width: 100%;
  margin: 16px 0;
  border-radius: 4px;
  background: #757575;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: ${props => props.value || 0}%;
    border-radius: 4px;
    background: #E0E0E0;
    transition: all 100ms ease;
  }
  &:hover {
    ${ProgressBarHandle} {
      opacity: 1;
    }
    &::before {
      background: #FF0000;
    }
  }
`;

export class ProgressBar extends React.Component {
  componentWillMount() {
    this.ref = React.createRef();
  }

  handleClick = (event) => {
    const bounds = this.ref.current ? this.ref.current.getBoundingClientRect() : {};
    if (bounds === {}) return;

    const seek = (event.pageX - bounds.left) / (bounds.right - bounds.left);
    const changeEvent = event;
    changeEvent.target.value = seek * 100;
    this.props.onClick(changeEvent);
  }

  render = () => (
    <ProgressBarContainer {...this.props} onClick={this.handleClick}>
      <ProgressBarCustom value={this.props.value} ref={this.ref}>
        <ProgressBarHandle offset={this.props.value} />
      </ProgressBarCustom>
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  onClick: () => {},
};
