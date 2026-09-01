import { useState,useRef, useEffect   } from "react"
import Notes from "../components/notes"
import Head from "../components/header"
import PageMotion from "../animations/page"
import Nav from "../components/nav"
function App() {
    const [input,setInput] = useState("")
    const [note,setNote] = useState([])
    const textareaRef = useRef(null)
const [edit,setEdit] = useState(null)
const colorNames = ["purple", "yellow", "blue", "green", "pink"]
const [darkMode, setDarkMode] = useState(true)
function toggleTheme() {
  setDarkMode(!darkMode)
}

useEffect(()=>{
  async function getNotes() {
    const response = await fetch("https://full-stack-note-app-69rb.onrender.com/notes")
    const data = await response.json()
    setNote(data)
    
  }
  getNotes()
},[])
const colors = {
  purple: "bg-purple-50 border-purple-200",
  yellow: "bg-yellow-50 border-yellow-200",
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  pink: "bg-pink-50 border-pink-200"
}



async function addNote() {
   if (!input.trim()) {
  return
}
if (input.length > 201) {
  return alert("too much text")
}
if (edit !== null) {
  const response = await fetch(`https://full-stack-note-app-69rb.onrender.com/notes${edit}`,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: input
    })
  })
  const updatedNote = await response.json()

  setNote((prev)=>{
  return  prev.map((el)=>(
      el.id === edit ? updatedNote : el
    )
  )
  })

  setEdit(null)
  setInput("")
  textareaRef.current.focus()
  return
}


    else {
 const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)]

const response = await fetch("https://full-stack-note-app-69rb.onrender.com/notes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    content: input,
    color: randomColor
  })
})

if (!response.ok) {
  const error = await response.text()
  console.log("POST ERROR:", error)
  return
}

const data = await response.json()


setNote(prevNotes => [...prevNotes, data])
}
  setInput("")
  textareaRef.current.focus()

   }

async function deleteNote(id) {
  const response = await fetch(`https://full-stack-note-app-69rb.onrender.com/notes/${id}`, {
    method: "DELETE"
  })

  if (!response.ok) {
    console.log("Failed to delete note")
    return
  }

  setNote((prev) => prev.filter((item) => item.id !== id))
}

function editNote(id) {
  const selectedNote = note.find((el) => el.id === id)

  setInput(selectedNote.content)
  setEdit(id)
  textareaRef.current.focus()
}

  return (
  <PageMotion
    className={`${darkMode ? "dark" : ""}  min-h-screen  text-slate-900 dark:bg-slate-950 dark:text `}
  >
    <Nav 
    toggleTheme={toggleTheme} darkMode={darkMode} />

    <Head
      input={input}
      
      textareaRef={textareaRef}
      addNote={addNote}
      setInput={setInput}
    />

    <Notes
      editNote={editNote}
      deleteNote={deleteNote}
      note={note}
      colors={colors}
    />
  </PageMotion>
)
}

export default App
