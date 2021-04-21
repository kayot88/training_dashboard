import React, { useReducer } from "react";
import { Dnd } from "../hooksComponents/DnD/index";
import mobxComp from "../mobxStore/store";
const DndContainer = () => {
  return (
    <Dnd>
      <Dnd.Tilte>React Drag and drop component</Dnd.Tilte>
      <Dnd.DropZone>
        <p>Drag files here to upload</p>
        <ol className="dropped-files">
          {mobxComp.store.fileList.length > 0 
            ? mobxComp.store.fileList.map((f) => {
                return <li key={f.name}>{f.name}</li>;
              })
            : (<div>No any</div>)}
        </ol>
      </Dnd.DropZone>
    </Dnd>
  );
};

export default DndContainer;
