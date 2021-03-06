import React from "react";
import {
  Container,
  Content,
  Cloud1,
  IronMan,
  Jet,
  Text,
  BackGr,
  Cloud2,
  Hero,
  Moon,
  Title,
  TextWrapper,
} from "./styles";

export const ToniStark = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

ToniStark.Hero = ({ children, ...rest }) => {
  return <Hero {...rest}>{children}</Hero>;
};
ToniStark.Content = ({ children, ...rest }) => {
  return <Content {...rest}>{children}</Content>;
};
ToniStark.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};
ToniStark.Text = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};
ToniStark.TextWrapper = ({ children, ...rest }) => {
  return <TextWrapper {...rest}>{children}</TextWrapper>;
};
ToniStark.BackGr = ({ ...rest }) => <BackGr {...rest}/>;
ToniStark.Cloud1 = ({ ...rest }) => <Cloud1 {...rest}/>;
ToniStark.Cloud2 = ({ ...rest }) => <Cloud2 {...rest} />;
ToniStark.IronMan = ({ ...rest }) => <IronMan {...rest} />;
ToniStark.Moon = ({ ...rest }) => <Moon {...rest} />;
ToniStark.Jet = ({ ...rest }) => <Jet {...rest} />;


// @types/jest
// @types/node
// @types/react
// @types/react-dom