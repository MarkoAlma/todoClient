import axios from "axios"
//const baseUrl = "http://localhost:8000/"
const baseUrl = "https://todo-server-omega-five.vercel.app/"


export const getTodos = async (setTodo)=> {
    const resp = await axios.get(baseUrl+"todos")
    setTodo(resp.data)
}

export const deleteTodo = async (id) => {
    await axios.delete(`${baseUrl}todos/${id}`)
}

export const deleteAllTodo = async (id) => {
    await axios.delete(`${baseUrl}todos/`)
}

export const addTodo = async (task) => {
    await axios.post(baseUrl +"todos", {task})
}

export const patchTodo = async (id, completed) => {
    await axios.patch(`${baseUrl}todos/${id}`, {completed: !completed})
}

//export const summaryTodo = async (todo) => {
//    console.log("ALMAAJDHGAHDGHGD");
//    console.log(todo);
//}