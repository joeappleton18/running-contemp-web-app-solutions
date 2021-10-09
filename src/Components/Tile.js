import React from "react";

function Tile(props) {
  const { children } = props;
  const divStyle = {
    boxShadow: "40px 10px 20px rgba(31, 32, 32, 0.05)",
    padding: "3%",
  };

  return <div style={divStyle}>{children}</div>;
}

export default Tile;
