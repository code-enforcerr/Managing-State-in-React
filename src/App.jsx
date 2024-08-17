import { useState } from 'react'
import TaskList from './Components/TaskList/TaskList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <TaskList/>
    </div>
  )
}

export default App
