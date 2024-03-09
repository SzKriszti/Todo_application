import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

function Todos() {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    const todosCollection = collection(db, "todos")

    getDocs(todosCollection)
      .then(querySnapshot => {
        const todosData = querySnapshot.docs.map(doc => doc.data())
        setTodos(todosData)
      })
  }, [])

  /* 
  TO DO: fetch all todos from firebase, and create components from them 
  */

  return (
    <div className="todos">
      {todos
				?
				todos.map((todoData, index) => <p key={index}>{todoData.todo}</p>)
				:
				"loading..."
			}
    </div>
  )
}

export default Todos