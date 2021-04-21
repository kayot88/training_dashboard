import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  height: 300px;
  max-height: auto;
  border: 2px solid;
`;

export const DropZone = styled.div`
  background-color: navy;
  color: #fff;
  height: 100px;
  width: 60%;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: navy;
  line-height: 1.5;
`;

export const EnterName = styled.div``;
