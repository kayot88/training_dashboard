import { Container, DropZone, Title } from "./styles";
import { observer } from "mobx-react-lite";
import store from "../../mobxStore/store";

import "./styles/index.css";

export const Dnd = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Dnd.DropZone = observer(({ children, ...restProps }) => {
  return (
    <DropZone
      // className={
      //   data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
      // }
      onDrop={(e) => store.handleDrop(e)}
      onDragOver={(e) => store.handleDragOver(e)}
      onDragEnter={() => store.handleDragEnter()}
      onDragLeave={() => store.handleDragLeave()}
      {...restProps}
    >
      {children}
    </DropZone>
  );
});
Dnd.Tilte = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
