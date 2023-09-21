import React from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableBox = ({ name }) => {
  const [, ref] = useDrag({
    type: "box",
    item: { name },
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        margin: "16px",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {name}
    </div>
  );
};

const DropTarget = ({ droppedItem }) => {
  const [, ref] = useDrop({
    accept: "box",
    drop: (item) => {
      // Aquí puedes manejar la lógica cuando se suelta un elemento
      console.log(`Elemento ${item.name} soltado en el objetivo.`);
    },
  });

  return (
    <div
      ref={ref}
      style={{
        width: "300px",
        height: "300px",
        border: "2px dashed gray",
        display: "inline-block",
        position: "relative",
      }}
    >
      {droppedItem}
    </div>
  );
};

const DragAndDropExample = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableBox name="Elemento 1" />
      <DraggableBox name="Elemento 2" />
      <DraggableBox name="Elemento 3" />
      <DropTarget />
    </DndProvider>
  );
};

export default DragAndDropExample;
