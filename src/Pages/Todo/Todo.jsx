import React, { useState } from 'react'
import Layout from './../Layout/Layout'
import TodoAppBar from './../Todo/TodoAppBar'
import NewTodo from './../Todo/NewTodo'
import TodoList from './../Todo/TodoList'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Snackbars from '../../Components/Snackbar/Snackbar'

const useStyles = makeStyles({
    TodoWrap: {
        background: '#fff',
        border: '1px solid #3F51B5',
    },
});

const Todo = () => {
    const classes = useStyles();
    const [openSnakbar, setOpenSnakbar] = useState(false)
    const [Todos, setTodos] = useState({ todos: [] })
    const [SnackbarsDetail, setSnackbarsDetail] = useState({ message: '', alert: '' })
    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnakbar(false)
    }
    const getTodo = (newTodo) => {
        setTodos(prevState => {
            return {
                todos: [
                    ...prevState.todos,
                    newTodo,
                ]
            }
        })
    }
    const deleteItem = (itemId) => {
        setTodos(prevState => {
            return { todos: prevState.todos.filter(item => item.id !== itemId) }
        })
        setSnackbarsDetail({ message: 'The todo was successfully deleted', alert: 'success', })
        setOpenSnakbar(true)
    }
    const doneHandler = (item) => {
        let myTodo = Todos.todos
        let newArray = [...myTodo];
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === item.id) {
                newArray[i].done = !newArray[i].done
            }
        }
        setTodos({ todos: newArray })
    }


    const Done = Todos.todos.filter(item => item.done === true);
    const unDone = Todos.todos.filter(item => item.done === false);

    const filterAllTodos = () => {

    }
    const filterDone = () => {
        // let findDone = Todos.todos.find(item => item.done === true)
        // console.log(findDone)
        let myTodo = Todos.todos
        let newArray = [...myTodo];
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].done === false) {
                newArray[i].done = !newArray[i].done
            }
        }
        setTodos({ todos: newArray })
        // در این  
    }

    const filterUndone = () => {
        let findUndone = Todos.todos.find(item => item.done === false)
        console.log(findUndone)
    }
    return (
        <Layout>
            <Container maxWidth="sm">
                <div className={classes.TodoWrap}>
                    <TodoAppBar
                        filterAllTodos={() => { filterAllTodos() }}
                        filterDone={() => { filterDone() }}
                        filterUndone={() => { filterUndone() }}
                        doneLength = {Done.length}
                        unDoneLength = {unDone.length}
                    />
                    <NewTodo newTodo={(newTodo) => { getTodo(newTodo) }} />
                    <TodoList
                        Todos={Todos}
                        deleteItem={(itemId) => { deleteItem(itemId) }}
                        done={(item) => { doneHandler(item) }}
                    />
                </div>
            </Container>
            <Snackbars
                open={openSnakbar}
                close={(close) => { closeSnackbar(close) }}
                typeAlert={SnackbarsDetail.alert}
                message={SnackbarsDetail.message}
            />
        </Layout>
    );
}
export default Todo;