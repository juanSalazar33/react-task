import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();
function TaskProvider(props) {

    const {
        item: listTask ,
        saveItem: saveTask,
        loading,
        error,
    } = useLocalStorage('TODOS_V3', []);

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

    const addTask = (text) => {
         let newTasks = {
             'text' : text,
             'completed' : false
         }
        saveTask("POST", newTasks);
    };

    const completeTask = (id)=> {
        let updateTasks = {
            'completed' : true
        }
        saveTask("PUT",updateTasks,id);
    };

    const delateTask = (id) => {
        saveTask("DELETE",null,id);
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

