import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState([{ title: "", content: "" }]);

  function handleChange(event) {
    let { name, value } = event.target;
    setNote((prev) => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content
        };
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.addItem(note);
            event.preventDefault();
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
