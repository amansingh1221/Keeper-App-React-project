import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }
  function deleteNote(id) {
    setItems((prevs) => {
      return prevs.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  function createNote(note, id) {
    return (
      <Note
        id={id}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map(createNote)}

      <Footer />
    </div>
  );
}

export default App;
