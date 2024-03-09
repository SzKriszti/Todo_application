import { useState } from "react"

function Todo() {
  const [todo, setTodo] = useState("")

  const addTodo = () => {
    console.log(todo)
  }

  return (
    <div className="todo">
      <input type="text" placeholder="write todo" 
        value={todo} 
        onChange={event => setTodo(event.target.value)}
      />
      <button onClick={addTodo}>add todo</button>
    </div>
  )
}

export default Todo