import React from "react";
const someStyles = { listStyleType: "none" };

function ToDoItem(props) {
  console.log(props);
  return (
    <ul style={someStyles}>
      <li>
        <input
          type="checkbox"
          onChange={props.item.handleChange}
          checked={props.item.selected}
        />
        <p style={{ display: "inline-block" }}>{props.item.text}</p>
      </li>
    </ul>
  );
}
export default ToDoItem;
