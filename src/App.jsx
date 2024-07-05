import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValues) => {
      return [...prevValues, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevValues) => {
      return prevValues.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea handleClick={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
