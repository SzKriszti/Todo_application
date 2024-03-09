import { useState } from "react"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

function NewTodo() {
  const [todo, setTodo] = useState("")

  const addTodo = async () => {
    console.log(todo)

    try {
      const todosCollection = collection(db, "todos")

      const docRef = await addDoc(collection(db, "todus"), {
        todo: todo,
      })
      console.log("document written with ID: ", docRef.id)
    } catch (error) {
      console.log("error adding document: ", error)
    }
  }

  return (
    <div className="new-todo">
      <input type="text" placeholder="write todo" 
        value={todo} 
        onChange={event => setTodo(event.target.value)}
      />
      <button onClick={addTodo}>add todo</button>
    </div>
  )
}

export default NewTodo