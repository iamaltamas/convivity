import React, { useEffect } from "react";
import javaScript from "../../img/javascript.jpg";
import html from "../../img/html.png";
import css from "../../img/css.png";
import "./DragDrop.css";
function DragDrop({ dragPatternAnswer }) {
  const [dragDrop, setDragDrop] = React.useState([
    { id: 1, name: "javaScript", img: javaScript },
    { id: 2, name: "Css", img: css },
    { id: 3, name: "Html", img: html },
  ]);
  useEffect(() => {
    dragPatternAnswer(dragDrop);
  }, [dragDrop]);

  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _dragDrop = [...dragDrop];

    //remove and save the dragged item content
    const draggedItemContent = _dragDrop.splice(dragItem.current, 1)[0];

    //switch the position
    _dragDrop.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setDragDrop(_dragDrop);
  };

  return (
    <div className="w-50">
      <div className="list-sort">
        {dragDrop.map((item, index) => (
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="list-img">
              <img src={item?.img} height={50} width={50} />
            </div>
            <h5 className="p-3">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragDrop;
