
import React from 'react';

const App = () => {
  const [task, setTask] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);

  // Add or update task
  const addHandler = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = task;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, task]);
    }

    setTask("");
  };

  // Delete task
  const deleteHandler = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));

    // Reset edit mode if the edited task is deleted
    if (editIndex === index) {
      setEditIndex(null);
      setTask("");
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  // Edit task
  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addHandler}>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>

      {todoList.map((d, index) => (
        <div key={index}>
          <span>{d}</span>{" "}
          <button onClick={() => deleteHandler(index)}>
            DELETE
          </button>{" "}
          <button onClick={() => editHandler(index)}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
