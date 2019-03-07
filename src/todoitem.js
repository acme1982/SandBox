import React from "react";

function ToDoItem(props) {
  const someStyles = { listStyleType: "none" };
  const pStyle = { display: "inline-block" };
  const pStyle1 = { display: "inline-block", textDecoration: "line-through" };
  return (
    <ul style={someStyles}>
      <li>
        <input
          type="checkbox"
          checked={props.item.selected}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p style={props.item.selected ? pStyle1 : pStyle}>{props.item.text}</p>
      </li>
    </ul>
  );
}
export default ToDoItem;
