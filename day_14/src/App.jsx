import React from 'react'

const App = () => {
  const [task, setTask] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  
  const addHandler = () => {
    if (!task.trim()) return;
    setTodoList([...todoList, task.trim()]);
    setTask("");
    console.log(todoList);
  };
  const [editingIndex, setEditingIndex] = React.useState(null);
  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditingIndex(index);
  };

  const updateHandler = () => {
    if (!task.trim()) return;
    const newTodoList = [...todoList];
    newTodoList[editingIndex] = task.trim();
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
        <button onClick={addHandler} disabled={!task.trim()}>Add Task</button>
      ) : (
        <button onClick={updateHandler} disabled={!task.trim()}>Update Task</button>
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
