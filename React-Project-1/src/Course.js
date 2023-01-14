import React from "react";

function Course({ image, title, description }) {
  return (
    <div>
      <img src={image} alt=""></img>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Course;
