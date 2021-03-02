import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 300px;
  min-height: 400px;
`;

export const Container = styled.div``;
export const FormTitle = styled.h2`
  box-sizing: border-box;
  position: relative;
  color: #fff;
  font-weight: 600;
  width: 100%;
  letter-spacing: 1px;
  font-size: 24px;
  margin-bottom: 40px;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #fff;
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
`;

export const Color = styled.div`
  position: absolute;
  top: -350px;
  width: 800px;
  height: 800px;
  background: #ff359b;
  filter: blur(250px);
`;
export const Color2 = styled.div`
  position: absolute;
  bottom: 50px;
  left: 300px;
  width: 500px;
  height: 500px;
  background: #fffd87;
  filter: blur(250px);
`;
export const Color3 = styled.div`
  position: absolute;
  bottom: -150px;
  width: 500px;
  height: 700px;
  background: #00d2ff;
  filter: blur(250px);
`;
export const FeatureContainer = styled.div`
  position: relative;
  min-width: 400px;
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* background: ; */
`;

export const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
`;
export const Button = styled.input`
  margin-top: 20px;
  transition:  transform 1s;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    background: #666;
    transform: scale(1.1);
  }
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
  max-width: 100px;
  width: 100%;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #666;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  color: #333;
`;
export const Forget = styled.p`
  color: #fff;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const animate = keyframes`
  0% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateY(-40px);
  }
  `;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Square1 = styled.p`
  position: absolute;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  top: -50px;
  right: -60px;
  height: 100px;
  width: 100px;
  z-index: 1;
  animation: ${rotate} 10s linear infinite;
`;

export const Square2 = styled(Square1)`
  top: 150px;
  left: -100px;
  height: 120px;
  width: 120px;
  z-index: 3;
`;
export const Square3 = styled(Square1)`
  top: 340px;
  right: -60px;
  height: 80px;
  width: 80px;
  z-index: 3;
`;
export const Square4 = styled(Square1)`
  top: 400px;
  left: 60px;
  height: 50px;
  width: 50px;
  z-index: 3;
`;
export const Square5 = styled(Square1)`
  top: -100px;
  right: 220px;
  height: 50px;
  width: 50px;
  z-index: 3;
`;
