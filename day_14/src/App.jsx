import React from 'react'

const App = () => {
  const [task, setTask] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  
  const addHandler = () => {
    setTodoList([...todoList, task]);
    setTask("");
    console.log(todoList);
  };
  const [editingIndex, setEditingIndex] = React.useState(null);
  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditingIndex(index);
  };

  const updateHandler = () => {
    const newTodoList = [...todoList];
    newTodoList[editingIndex] = task;
    setTodoList(newTodoList);
    setTask("");
    setEditingIndex(null);
  };
  
  return (
    <div>
      <h1>To do list </h1>
      <input 
        placeholder="Add a new task..." 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      {editingIndex === null ? (
        <button onClick={addHandler}>Add Task</button>
      ) : (
        <button onClick={updateHandler}>Update Task</button>
      )}
      <br></br>
      {todoList.map((task, index)=> (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => {
            const newTodoList = [...todoList];
            newTodoList.splice(index, 1);
            setTodoList(newTodoList);
          }}>DELETE</button>
         <button onClick={() => {
  setTask(todoList[index]);
  setEditingIndex(index);
}}>EDIT</button>
        </div>
      ))}
    </div>
  )
}

export default App
