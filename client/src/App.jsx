import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./config";
import EditArea from "./components/EditArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => setNotes(response.data))
      .catch((err) => console.log(err));
  }, []);

  async function addNote(newNote) {
    setNotes((prevValues) => {
      return [...prevValues, newNote];
    });
    await axios
      .post(BASE_URL, newNote)
      .then(() => console.log("Note created!"))
      .catch((err) => console.log(err));
  }

  async function deleteNote(id) {
    await axios
      .delete(BASE_URL + `${id}`)
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
