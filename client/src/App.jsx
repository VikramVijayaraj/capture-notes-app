import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setNotes(response.data))
      .catch((err) => console.log(err));
  }, []);

  async function addNote(newNote) {
    setNotes((prevValues) => {
      return [...prevValues, newNote];
    });
    await axios
      .post(API_URL, newNote)
      .then(() => console.log("Note created!"))
      .catch((err) => console.log(err));
  }

  async function deleteNote(id) {
    await axios
      .delete(API_URL + `${id}`)
      .then(() => console.log("Note deleted!"))
      .catch((err) => console.log(err));
    setNotes((prevValues) => {
      return prevValues.filter((note, index) => {
        return note._id !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea handleClick={addNote} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
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
