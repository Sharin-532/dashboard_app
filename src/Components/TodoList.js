import { useState } from "react";
import TodoItem from './TodoItem';


function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Test',
            completed: true
        },
        {
            id: 2,
            text: 'Added Successfully',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="w-full ">
            <div className="w-auto flex justify-center">
                <h1 className=" text-4xl m-16 p-4 font-bold">Task List</h1>
            </div>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}


            <div className="w-auto flex justify-center mt-4">
                <input className=" bg-slate-100 rounded-md p-4 m-4 w-9/12"
                    type="text"
                    value={text}
                    onChange={(e) => {
                        debugger

                        setText(e.target.value);
                    }}
                    placeholder="Create a new todo"
                />
                <button className=" bg-green-500 text-white py-3 px-3  p-4 m-4 h-12 rounded-md font-bold hover:bg-green-600"
                    onClick={() => {
                        if (!text.trim())
                            return; addTask(text)
                    }
                    }>Add</button>
            </div>
        </div>
    );
}

export default TodoList;







