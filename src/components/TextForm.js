import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked!");
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    // console.log("handling on change!");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          rows="11"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </>
  );
}
