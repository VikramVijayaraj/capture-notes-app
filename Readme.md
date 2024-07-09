# Capture - Notes App

[Capture](https://capture-client.vercel.app/) is a note-taking application built from scratch using modern web technologies. It allows users to create, view, and delete notes efficiently.

## Project Structure

```
capture-notes-app/
├── client/
│   ├── public/
│   │   ├── styles.css
│   │   └── capture.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateArea.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Note.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── index.html
│   └── ...
├── server/
│   ├── models/
│   │   └── Note.js
│   ├── server.js
│   ├── package.json
│   ├── vercel.json
│   └── ...
├── .gitignore
└── README.md
```

## Features

- **Create Notes:** Users can create new notes with a title and content.
- **View Notes:** Users can view a list of all notes.
- **Delete Notes:** Users can delete notes they no longer need.

## Technologies Used

- **Front End:**

  - ReactJS
  - Vite
  - Axios

- **Back End:**
  - NodeJS
  - ExpressJS
  - Mongoose
  - MongoDB

## Usage

1. Open your browser and navigate to `https://capture-client.vercel.app/`.
2. Use the interface to add new notes by entering a title and content and click add button to save.
3. View the list of notes on the main page.
4. Delete notes by clicking the delete button next to each note.
5. All the actions are reflected in the database.

## API Endpoints

### GET /

- **Description:** Fetch all notes.
- **Response:** JSON array of note objects.

### POST /

- **Description:** Create a new note.
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content"
  }
  ```
- **Response:** JSON object of the created note.

### DELETE /:id

- **Description:** Delete a note by ID.
- **Response:** JSON message confirming deletion.

## Deployment

- **Server** deployed here: [Capture Server](https://capture-server-beryl.vercel.app/)
- **Client** deployed here: [Capture Client](https://capture-client.vercel.app/)

## Screenshot:

Landing page:
![Capture_UI](/capture_ui.png)

## Feedback

Any feedbacks are appreciated.
