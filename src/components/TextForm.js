import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked!");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared the textarea!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("handling on change!");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed all extraspaces!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "rgb(26, 28, 30)",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            rows="11"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(26, 28, 30)" : "white",
              color: props.mode === "dark" ? "white" : "rgb(26, 28, 30)",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleLoClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove ExtraSpace
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "rgb(26, 28, 30)",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
