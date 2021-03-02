import { Container, ImageForest, Moon, Star } from "./styles/index";

export function ThemeToggler({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ThemeToggler.ImageForest = ({ ...rest }) => {
  return <ImageForest {...rest} />;
};

ThemeToggler.Moon = ({ ...rest }) => {
  return <Moon {...rest} />;
};


ThemeToggler.Star = ({...rest}) =>  {
  return <Star {...rest}/>
} 