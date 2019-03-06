import React from "react";
const someStyles = { listStyleType: "none" };
const pStyle = { display: "inline-block" };
function ToDoItem(props) {
  return (
    <ul style={someStyles}>
      <li>
        <input
          type="checkbox"
          checked={props.item.selected}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p style={pStyle}>{props.item.text}</p>
      </li>
    </ul>
  );
}
export default ToDoItem;
