import { useEffect, useState } from 'react'
import './App.css'
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Coundown from './components/Coundown';

function App() {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data.slice(0,10)))
  },[])

  return (
    <>
      {/* <FetchData todo={todo} /> */}
      <Coundown/>
      <Counter />
    </>
  )
}

export default App
