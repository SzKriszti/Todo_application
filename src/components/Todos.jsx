import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

function Todos() {
  const [todos, setTodos] = useState([])

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
      
    </div>
  )
}

export default Todos