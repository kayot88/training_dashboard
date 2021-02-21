import { Container, Title } from "../ReactQueryComp/styles";

export function UseMemo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UseMemo.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
