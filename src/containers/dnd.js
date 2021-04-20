import React, { useReducer } from "react";
import { Dnd } from "../hooksComponents/DnD/index";



const DndContainer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };
  const [data, dispatch] = React.useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });
  console.log(data.fileList);

  return (
    <Dnd>
      <Dnd.Tilte>React Drag and drop component</Dnd.Tilte>
      <Dnd.DropZone data={data} dispatch={dispatch}>
        <p>Drag files here to upload</p>
        <ol className="dropped-files">
          {data.fileList.map((f) => {
            return <li key={f.name}>{f.name}</li>;
          })}
        </ol>
      </Dnd.DropZone>
    </Dnd>
  );
};

export default DndContainer;
