import React from "react";
export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    margin: "8px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    fontWeight: "bold",
    margine: "0",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#0000ff",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-inline style-</p>
      <button style={buttonStyle}>Fight!!</button>
    </div>
  );
};
