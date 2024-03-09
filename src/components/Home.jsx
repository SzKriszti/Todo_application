import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signOut, getAuth } from "firebase/auth"
import { app } from "../firebase"
import Todo from "./Todo"

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if (!token) {
      navigate('/log')
    }
  }, [navigate])

  const handleLogout = () => {
    const auth = getAuth(app)

    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("token")
        navigate('/log')
      })
  }

  return (
    <div className="Home">
        <h3>Home page</h3>
        
        <Todo />

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home