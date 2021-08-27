import styled from 'styled-components';
import bgImage from './assets/bg.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bgImage}) no-repeat center/cover;
    filter: grayscale(100%) blur(3px) opacity(70%);
    transform: scale(1.01);
  }
`;
