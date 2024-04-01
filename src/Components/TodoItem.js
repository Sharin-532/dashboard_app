import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function taskChange() {
 toggleCompleted(task.id);
 }
 
 return (
  <div className="w-auto flex justify-center">
 <div className="todo-item w-9/12">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={taskChange}
 />
<p>{task.text}</p>
<button onClick={() => deleteTask(task.id)} className="h-8 cursor-pointer w-8 flex justify-center items-center border border-black-600 bg-red-500 rounded-full ">
   X
 </button>
 </div>
 </div>
 );
}
export default TodoItem;