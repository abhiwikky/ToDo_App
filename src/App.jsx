import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoMsg from './assets/Message'


function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")
  const [dark, setDark] = useState(true)

  const handleDelete = (indexToDelete) => {
    const updatedTodos = todo.filter((element, i) => i !== indexToDelete);
    setTodo(updatedTodos);
  };

  return (
    <>
    <div className= {dark ? "dark_mode": "light_mode"}>
        <h1>ToDo App</h1>
        <div id="input" >
          <input
            type="text"
            className="styled-input"
            placeholder="Add Tasks"
            onChange={(Event) => setInput(Event.target.value)}
          />

          <button className="styled-button" onClick={ () => setTodo([...todo, input]) }>
            Add
          </button>
          <button className='styled-button' onClick={() => setDark(!dark)}>
            {dark? "Light☀️" : "Dark🌙"}
          </button>
        </div>

        {/* <div className='parent'> */}
          <div className='tasks'>
          {todo.map((item, i) => (
            <div key={i} className='box'>
               <p>{item}</p>
               <button
                  className="delete-btn"
                  onClick={() => handleDelete(i)}
                  >
                  X
                </button>

            </div>

                ))}
          </div> 
        {/* </div> */}

        <div className='message'>
          <TodoMsg allTodos ={todo} />
        </div>
       

    </div>
    </> 
  )
}

export default App
