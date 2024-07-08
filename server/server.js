import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Note from "./models/Note.js";
import "dotenv/config";

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://capture-client.vercel.app/",
  })
);
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

// Delete a note
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  console.log(req.params);
  res.json({ message: "Note deleted" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server running on port: ${process.env.SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Connection failed: ${err}`);
  });
