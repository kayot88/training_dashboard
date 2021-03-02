import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#111425, #2751e0);
  background-attachment: fixed;
  overflow: hidden;
`;

export const ImageForest = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  width: 100%;
  bottom: 80px;
  left: 0;
  transform: scale(1.2);
`;

export const Moon = styled.div`
  position: absolute;
  top: 100px;
  left: 400px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  transition: 0.5s;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#111425, #2751e0);
    /* 👍 */
    background-attachment: fixed;
    top: -15px;
    left: 15px;
  }
`;

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
  `;

export const Star = styled.i`
  position: absolute;
  background: silver;
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${animate} linear infinite;
  animation-duration: ${(props) => props.animationDuration};
  animation-delay: ${(props) => props.animationDelay};
`;

const cloudAnimation = keyframes`
  0% {
    transform: translateX(-100%) scale(1);

  }
  100% {
    transform: translateX(400%) scale(1.5);
  }
  `;

export const Cloud1 = styled.img`
  position: absolute;
  max-width: 600px;
  top: 0;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 50s linear infinite;
`;
export const Cloud2 = styled.img`
  position: absolute;
  max-width: 300px;
  top: 0;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 35s linear infinite;
  animation-delay: -25s;
`;
export const Cloud3 = styled.img`
  position: absolute;
  max-width: 400px;
  top: 75px;
  left: 0;
  z-index: 2;
  animation: ${cloudAnimation} 30s linear infinite;
  animation-delay: -10s;
`;
