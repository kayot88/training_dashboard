import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { bounceOutUp } from "react-animations";


const backOutUpAnimation = keyframes`${bounceOutUp}`;

export const Container = styled.div`
  ${(props) =>
    props.active
      ? `background: linear-gradient(#ffeb3b, #ff9800);
      `
      : `background: linear-gradient(#111425, #2751e0)
      `};
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 250px;
    width: 100%;
    background: linear-gradient(transparent, #fff, #2598f3);
    transition: 0.5s;
  }
`;

export const ImageForest = styled.img`
  ${(props) => (props.active ? `bottom: -250px;` : `bottom: 80px;`)};
  src: ${(props) => props.src};
  position: absolute;
  width: 100%;

  left: 0;
  transition: 0.5s;
  transform: scale(1.2);
`;
export const Bg = styled.img`
  ${(props) => (props.active ? `bottom: 150px;` : `bottom: -550px;`)};
  src: ${(props) => props.src};
  position: absolute;
  max-width: 100%;
  pointer-events: none;

  /* bottom: 0; */
  transition: 0.5s;
`;

export const Moon = styled.div`
  position: absolute;
  user-select: none;
  top: 100px;
  left: 400px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  transition: 0.5s;
  ${(props) =>
    props.active &&
    `
    left: 200px;
    box-shadow: 0 0 0 20px rgba(255,255,255,0.5),
                0 0 0 40px rgba(255,255,255,0.5),
                0 0 0 80px rgba(255,255,255,0.5),
                0 0 0 120px rgba(255,255,255,0.2),
                0 0 0 180px rgba(255,255,255,0.2),
                0 0 0 240px rgba(255,255,255,0.2),
                0 0 0 300px rgba(255,255,255,0.1);
      `}
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${(props) =>
      props.active
        ? `background: linear-gradient(#ffeb3b, #ff9800);
           opacity: 0;
           left: 200px;
      `
        : `background: linear-gradient(#111425, #2751e0)
      `};
    background-attachment: fixed; /* 👍 */
    top: -15px;
    left: 15px;
    cursor: pointer;
  }
`;

// const animate = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(0px);
//   }
//   10%, 90% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(-100px);
//   }
  // `;

export const Star = styled.i`
  ${(props) => props.active && `display:none`};
  animation: linear infinite ${backOutUpAnimation};
  position: absolute;
  background: silver;
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation-duration: ${(props) => props.animationDuration};
  animation-delay: ${(props) => props.animationDelay};
`;

const cloudAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    transform: translateX scale(1);

  }
  100% {
    transform: translateX(400%);
    transform: translateX scale(1.5);
  }
  `;

export const Cloud1 = styled.img`
  position: absolute;
  max-width: 600px;
  top: 0;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 50s linear infinite;
  pointer-events: none;
`;
export const Cloud2 = styled.img`
  position: absolute;
  max-width: 300px;
  top: 0;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 35s linear infinite;
  animation-delay: -25s;
  pointer-events: none;
`;
export const Cloud3 = styled.img`
  position: absolute;
  max-width: 400px;
  top: 75px;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 30s linear infinite;
  animation-delay: -10s;
  pointer-events: none;
`;
