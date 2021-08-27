import styled from 'styled-components';
import bgImage from './assets/bg.jpg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;

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
  }
`;
