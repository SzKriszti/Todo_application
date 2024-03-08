import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if (!token) {
      console.log("no token")
      navigate('/log')
    }
  }, [navigate])

  return (
    <div className="Home">
        <h3>Home page</h3>
        <p>Here will be the todo list.</p>
    </div>
  )
}

export default Home