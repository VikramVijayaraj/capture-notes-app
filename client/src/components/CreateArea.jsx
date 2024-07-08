import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    _id: "",
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(true);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addClicked(event) {
    props.handleClick(newNote);
    setNewNote({
      _id: "",
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={newNote.content}
        />
        {isExpanded && (
          <Zoom in={true}>
            <Fab onClick={addClicked}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
