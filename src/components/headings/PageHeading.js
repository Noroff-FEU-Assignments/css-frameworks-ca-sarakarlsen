import React from "react";

function PageHeading(props) {
  const styledHeading = {
    fontStyle: props.style,
  };
  return <h2 style={styledHeading}>{props.content}</h2>;
}

export default PageHeading;
