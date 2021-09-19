import React from "react";

function Paragraph(props) {
  const boldStyle = {
    fontWeight: props.weight,
    padding: props.padding + "px",
  };
  return <p style={boldStyle}> {props.content}</p>;
}

export default Paragraph;
