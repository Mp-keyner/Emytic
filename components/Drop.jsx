import { useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";

const Draggable = ({ id, onDragStart, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  const handleDragStart = (e) => {
    onDragStart(e, id);
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        margin: "8px",
        cursor: "grab",
        ...style,
      }}
      {...attributes}
      {...listeners}
      onDragStart={handleDragStart}
    >
      {children}
    </div>
  );
};

const Droppable = ({ id, onDrop, children }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");
    onDrop(draggedItemId, id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: "2px dashed #ccc", padding: "16px", minHeight: "100px" }}
    >
      {children}
    </div>
  );
};

const Drop = () => {
  const [items, setItems] = useState([
    { id: "item1", content: "Item 1" },
    { id: "item2", content: "Item 2" },
    { id: "item3", content: "Item 3" },
  ]);

  const [droppableId, setDroppableId] = useState("droppable1");

  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData("text/plain", itemId);
  };

  const handleDrop = (draggedItemId, newDroppableId) => {
    const draggedItem = items.find((item) => item.id === draggedItemId);

    // Si el elemento ya está en la misma área, no hagas cambios
    if (draggedItem.droppableId === newDroppableId) {
      return;
    }

    // Actualiza la lista de elementos para mover el elemento a la nueva Droppable
    const updatedItems = items.map((item) => {
      if (item.id === draggedItemId) {
        return { ...item, droppableId: newDroppableId };
      }
      return item;
    });

    setItems(updatedItems);
    setDroppableId(newDroppableId);
  };

  return (
    <DndContext>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Droppable
          id="droppable1"
          onDrop={(itemId) => handleDrop(itemId, "droppable1")}
        >
          {items
            .filter((item) => item.droppableId === "droppable1")
            .map((item) => (
              <Draggable
                key={item.id}
                id={item.id}
                onDragStart={handleDragStart}
              >
                {item.content}
              </Draggable>
            ))}
        </Droppable>

        <Droppable
          id="droppable2"
          onDrop={(itemId) => handleDrop(itemId, "droppable2")}
        >
          {items
            .filter((item) => item.droppableId === "droppable2")
            .map((item) => (
              <Draggable
                key={item.id}
                id={item.id}
                onDragStart={handleDragStart}
              >
                {item.content}
              </Draggable>
            ))}
        </Droppable>
      </div>
    </DndContext>
  );
};

export default Drop;

// import React, { useState } from "react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   TouchSensor, // Agregar TouchSensor
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   verticalListSortingStrategy,
//   horizontalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// function Drop() {
//   const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
//   const sensors = useSensors(
//     useSensor(TouchSensor), // Agregar TouchSensor
//     useSensor(PointerSensor)
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//       }}
//     >
//       <DndContext
//         sensors={useSensors(useSensor(TouchSensor))}
//         // sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragEnd={handleDragEnd}
//       >
//         <SortableContext items={items} strategy={horizontalListSortingStrategy}>
//           <div
//             style={{
//               background: "red",
//               width: "100%",
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr 1fr",
//             }}
//           >
//             {items.map((id) => (
//               <SortableItem key={id} id={id}>
//                 Cuadro {id}
//               </SortableItem>
//             ))}
//           </div>
//         </SortableContext>
//       </DndContext>
//     </div>
//   );

//   function handleDragEnd(event) {
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       setItems((items) => {
//         const oldIndex = items.indexOf(active.id);
//         const newIndex = items.indexOf(over.id);

//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   }
// }

// export function SortableItem(props) {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: props.id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     border: "1px solid black",
//     padding: "8px",
//     margin: "8px",
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       {props.children}
//     </div>
//   );
// }

// export default Drop;
