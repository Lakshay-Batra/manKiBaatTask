import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import { red } from "@material-ui/core/colors";

function CreateArea() {

  const [inputString, setInputString] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const [inputStringLength, setInputStringLength] = useState(0);

  function handleChange(event) {
    const { value } = event.target;
    const truncateString = value.slice(0, 180);
    const stringLength = truncateString.length;

    setInputString(value);
    setInputStringLength(stringLength);
  }


  function expand() {
    setExpanded(true);
  }

  const alertStyle = {
    color: !(180-inputStringLength) ? "red" : "rgb(119, 117, 117)"
  }

  return (
    <div>
      <div className="create-note">
        <textarea maxLength="180" onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "4" : "1"} value={inputString} />
        <Zoom in={isExpanded}>
          <Fab><AddIcon /></Fab>
        </Zoom>

        {isExpanded && <p className="string-counter" style={alertStyle}>Limit: {inputStringLength}/180 and {180-inputStringLength} left</p>}
      </div>
    </div>
  );
}

export default CreateArea;
