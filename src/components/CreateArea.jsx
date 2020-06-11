import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea() {

  const [inputString, setInputString] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [upperLimit, setUpperLimit] = useState("");
  const [upperLimitIsEntered, setUpperLimitEntered] = useState(0);
  const [maxStringLength, setMaxStringLength] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "content") {
      
      var str = value;

      str = str.replace(/[ ]{2,}/gi, " ");
      str = str.replace(/\n /, "\n");


      if (str.split(" ").length === parseInt(upperLimit) + 1) {
        if (str.match(/(\s$)/gi)) {
          setMaxStringLength(value.length);
        } else {
          setMaxStringLength(null)
        }
      }

      str = str.replace(/(^\s*)|(\s*$)/gi, "");

      setInputString(value);
      setWordCount(str.split(' ').length);
      if(value === "") {
        setWordCount(0)
      }
    } else {
      setUpperLimit(value);
    }
  }

  function handleSubmit(event) {
    if (upperLimit !== "") {
      setUpperLimitEntered(1);
    }
    event.preventDefault();
  }

  const handleKeyDown =  (evt) => {
    if(evt.key === "Backspace") {
      setMaxStringLength(null);
    }
    if(maxStringLength !== null) {
      evt.preventDefault();
    }
  } 

  const alertStyle = {
    color: !(upperLimit - wordCount) ? "red" : "rgb(119, 117, 117)"
  }

  return (
    <div>
      {!upperLimitIsEntered ?
        <form onSubmit={handleSubmit} className="create-note">
          <input type="number" onChange={handleChange} name="length" placeholder="Enter Upper Limit of Words" value={upperLimit} />
          <Fab type="submit"><AddIcon /></Fab>
        </form>
        :
        <div className="create-note">
          <textarea onKeyDown={handleKeyDown} maxLength={maxStringLength} onChange={handleChange} name="content" placeholder="Take a note..." rows="4" value={inputString} />
          <Fab><AddIcon /></Fab>
          <p className="string-counter" style={alertStyle}>{wordCount}/{upperLimit} and {upperLimit - wordCount} remaining</p>
        </div>
      }
    </div>
  );
}

export default CreateArea;
