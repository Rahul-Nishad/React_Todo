import { useEffect, useState, useRef } from 'react'

import './App.css'
import Items from './Items';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  
  //  console.log("this is input",input)

const isFirstRender = useRef(true);


  const addTodo = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a todo");
      return;
    }
    // setTodos([...todos, { id: Date.now(), text: input }]);
    // setInput("");
    const newTodo = {
      id: Date.now(),
      data: input,
      completed: false
    }
    setTodos([...todos, newTodo]);
    setInput("");
  }

useEffect(() => {
 const savedTodos = JSON.parse(localStorage.getItem("todos"));

 if (savedTodos) setTodos(savedTodos);

}, [])


useEffect(() => {
  if(isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  localStorage.setItem("todos", JSON.stringify(todos));


}, [todos])




  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setTodos(newTodos);
  }
  
  return (
    <>
     <div className="div">
       <div className="app-container">
        <form  className="input-container" onSubmit={addTodo}>
          <input type="text" value={input} className="input" placeholder="Add A New Todo..." onChange={(e) => setInput(e.target.value)} />
          <button  className="btn">Add</button>
          
        </form>

      <ul className="items">
        {todos.map((todo)=> (
          <Items className="todo-item" key={todo.id} data={todo.data} id={todo.id} deleteTodo={deleteTodo} /> ))}
      </ul>

        
       </div>
     </div>
    </>
  )
}

export default App
   