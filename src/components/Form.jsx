import { useState } from "react"
import { app } from "../firebase"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function Form({ title }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleAction = () => {
    const auth = getAuth(app)

    if (title === "Login"){
      console.log("Login: ", email, password)
    } else if (title === "Registration") {
      console.log("Registration: ", email, password)

      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          console.log(res)
          sessionStorage.setItem("token", res._tokenResponse.refreshToken)
        })
    }
  }

  return (
    <form>
      <h3>{title} form</h3>

      <input type="text" autoComplete="off" placeholder="e-mail addres" 
        onChange={event => setEmail(event.target.value)} />
      <input type="password" autoComplete="off" placeholder="password"
        onChange={event => setPassword(event.target.value)} />

      <button type="button" onClick={handleAction}>{title}</button>
    </form>
  )
}

export default Form