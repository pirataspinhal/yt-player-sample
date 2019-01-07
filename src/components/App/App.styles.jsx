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

export const ProgressBar = styled.input`
  width: 100%;
  margin: 8px;
`;
