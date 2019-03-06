import React from "react";

const styling = {
  textAlign: "center",
  textDecoration: "italic"
};

function Header(props) {
  return (
    <div>
      <h1 style={styling}>This is The best website.</h1>
    </div>
  );
}

export default Header;
