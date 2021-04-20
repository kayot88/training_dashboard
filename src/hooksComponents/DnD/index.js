import { Container, DropZone, Title } from "./styles";
import './styles/index.css'
export function Dnd({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dnd.DropZone = ({ children, data, dispatch, ...restProps }) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      const excistingFiles = data.fileList.map((f) => f.name);
      files = files.filter((n) => !excistingFiles.includes(n.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
      dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };
  return (
    <DropZone
      className={
        data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
      }
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      
      {...restProps}
    >
      {children}
    </DropZone>
  );
};
Dnd.Tilte = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
