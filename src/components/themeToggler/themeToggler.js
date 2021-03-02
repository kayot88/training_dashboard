import {
  Container,
  ImageForest,
  Moon,
  Star,
  Cloud1,
  Cloud2,
  Cloud3,
} from "./styles/index";

export function ThemeToggler({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ThemeToggler.ImageForest = ({ ...rest }) => {
  return <ImageForest {...rest} />;
};

ThemeToggler.Moon = ({ ...rest }) => {
  return <Moon {...rest} />;
};

ThemeToggler.Star = ({ ...rest }) => {
  return <Star {...rest} />;
};
ThemeToggler.Cloud1 = ({ ...rest }) => {
  return <Cloud1 {...rest} />;
};
ThemeToggler.Cloud2 = ({ ...rest }) => {
  return <Cloud2 {...rest} />;
};
ThemeToggler.Cloud3 = ({ ...rest }) => {
  return <Cloud3 {...rest} />;
};
