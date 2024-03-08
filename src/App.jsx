import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if (token) {
      navigate('/')
    } else {
      navigate('/reg')
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/reg' element={<Form title="Registration"/>}></Route>
        <Route path='/log' element={<Form title="Login"/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
