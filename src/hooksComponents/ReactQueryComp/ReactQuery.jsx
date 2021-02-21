import { Container, Button, Title, Loading, PreData } from "./styles";

export function ReactQuery({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ReactQuery.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

ReactQuery.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
ReactQuery.Loading = ({ children, ...restProps }) => {
  return <Loading {...restProps}>{children}</Loading>;
};
ReactQuery.PreData = ({ children, ...restProps }) => {
  return <PreData {...restProps}>{children}</PreData>;
};
