import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'

function App() {
  
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
