import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MongoConnection } from "./config.js";
import Note from "./models/Note.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Read all notes
app.get("/", async (req, res) => {
  const allNotes = await Note.find({});
  res.json(allNotes);
});

// Create a note
app.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
  });
  await newNote.save();
  res.json(newNote);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  console.log(req.params);
  res.json({ message: "Note deleted" });
});

// MongoDB connection
mongoose
  .connect(MongoConnection)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Connection failed: ${err}`);
  });

const newNote = new Note({
  title: "test_title",
  content: "test_content",
});
const anotherNote = new Note({
  title: "test_title2",
  content: "test_content2",
});
// Note.insertMany([newNote, anotherNote]);
