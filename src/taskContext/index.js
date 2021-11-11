import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();
const DFtasks = [
  { id: 1, text: 'task 1', completed: false },
  { id: 2, text: 'task 2', completed: false },
  { id: 3, text: 'task 3', completed: false },
  { id: 4, text: 'task 4', completed: false },
];
function TaskProvider(props) {

    const {
        item: listTask ,
        saveItem: saveTask,
        loading,
        error,
    } = useLocalStorage('TODOS_V3', DFtasks);

    const [searchKey, setSearchKey] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const countCompletedTask = listTask.filter(task => !! task.completed).length;
    const countAllTask = listTask.length;

    //load searched tasks array
    let searchedTasks = [];
    if(!searchKey.length >= 1){
        searchedTasks = listTask;
    } else {
        searchedTasks = listTask.filter(task => {
        const taskText = task.text.toLowerCase();
        const searchText = searchKey.toLowerCase();
        return taskText.includes(searchText);
        })
    }

    const getIndex = (text => {
        return listTask.findIndex(task => task.text === text);
    });

    const addTask = (text) => {
        const newTasks = [...listTask];
        newTasks.push({
            completed : false,
            text, 
        });
        saveTask(newTasks);
    };

    const completeTask = (text)=> {
        const taskIndex = getIndex(text);
        const newTasks = [...listTask];
        newTasks[taskIndex].completed = true;
        saveTask(newTasks);
    };

    const delateTask = (text) => {
        const taskIndex = getIndex(text);
        const newTasks = [...listTask];
        newTasks.splice(taskIndex, 1);
        saveTask(newTasks);
    };

    return (
     <TaskContext.Provider value = {{
        loading,
        error,
        countAllTask,
        countCompletedTask,
        searchKey,
        searchedTasks,
        openModal,
        setOpenModal,
        setSearchKey,
        addTask,
        completeTask,
        delateTask,
     }}>
         {props.children}
     </TaskContext.Provider>

    )
}

export {TaskContext, TaskProvider}

