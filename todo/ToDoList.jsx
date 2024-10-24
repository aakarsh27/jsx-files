import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eating", "Walking", "Sleeping"]);
    const [newTasks, setNewTasks] = useState([]);

    function handleInputChange(){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if (newTasks.trim() !== ""){
            setTasks(t => [...t, newTasks])
            setNewTasks("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    function movetaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function movetaskDown(index){
        if (index < tasks.length){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return(
    <div className='to-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder='Enter a task...'
                value={newTasks}
                onChange={handleInputChange}/>

            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button
                    className='delete-button'
                    onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button
                    className='move-button'
                    onClick={() => movetaskUp(index)}>
                    up
                </button>
                <button
                    className='move-button'
                    onClick={() => movetaskDown(index)}>
                    down
                </button>
            </li>)}
        </ol>

    </div>)
}

export default ToDoList