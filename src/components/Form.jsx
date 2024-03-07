import { useState } from "react"

function Form({ title }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form>
      <h3>{title} form</h3>

      <input type="text" autoComplete="off" placeholder="e-mail addres"></input>
      <input type="password" autoComplete="off" placeholder="password"></input>

      <button type="button">{title}</button>
    </form>
  )
}

export default Form