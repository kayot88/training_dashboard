import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
  margin: auto;
  min-height: 100vh;
  background: #0a2a43;
`;
export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 10;
    background: linear-gradient(to top, #0a2a43, transparent);
  }
  &::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 10;
  background: linear-gradient(to bottom, #0a2a43, transparent);
  }
`;
export const Content = styled.div`
  position: relative;
  padding: 20px;
  max-width: 100%;

  background: #0a2a43;
`;
export const Title = styled.h2`
  font-size: 3em;
  color: white;
  margin-bottom: 10px;
  margin: auto;
`;
export const Text = styled.p`
  font-size: 1.2em;
  color: white;
  text-align: justify;
`;
export const BackGr = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
export const Cloud1 = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 100px;
  left: 0;
  max-width: 600px;
  pointer-events: none;
`;
export const Cloud2 = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 100px;
  right: 0;
  max-width: 600px;
`;
export const IronMan = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  bottom: -350px;
  max-width: 50%;
  z-index: 2;
`;
export const Moon = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
`;
export const Jet = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 50px;
  left: 150px;
  max-width: 100%;
  transform: scale(0);
`;

export const TextWrapper = styled.div`
  width: 80%;
  margin: auto;
`;