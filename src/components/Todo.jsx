import React from "react";
//import { todosData } from "../data";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NewTodo from "./NewTodo";
import TodoSummary from "./TodoSummary";
import { useEffect } from "react";
import { addTodo, deleteAllTodo, deleteTodo, getTodos, patchTodo} from "../utils";

export const Todo = ({setIsLoggedIn}) => {
  const [todo, setTodo] = useState(null);
  console.log(todo);

  useEffect(()=>{
    getTodos(setTodo)
  },[])

  /*
  const handleDelete = (id)=> {
    setTodo(prev=>prev.filter(obj => obj.id != id))
  }

  const checkMark = (id)=> {
    setTodo(prev=>prev.map((obj) => obj.id != id ? obj : {...obj,completed:!obj.completed}))
  }

  const allClear = ()=> {
    setTodo(prev => prev.filter(obj  => obj.id != obj.id))
  }

  const handleAdd = (task) => {
    const uj = {id:Date.now(), task, completed:false}
    setTodo(prev=>[...prev,uj])
  }
  */
  const handleSummary = () => {
    const alma = todo.filter((obj)=>obj.completed==true)
    return [todo.length, alma.length]
  }
    

  const handleDelete = async (id)=> {
     await deleteTodo(id)
     getTodos(setTodo)
  }

    const allClear = async ()=> {
     await deleteAllTodo()
     getTodos(setTodo)
  }

  const handleAdd = async(task) => {
    await addTodo(task)
    getTodos(setTodo)
  }

    const checkMark = async(id, completed) => {
    await patchTodo(id)
    getTodos(setTodo)
  }

  //const handleSummary = async()=> {
  //  await summaryTodo(todo)
  //}

  return (
    <>
      <div style={{width:'100%'}}>
        <NewTodo handleAdd={handleAdd}/>
        <ListGroup>
          {!todo && <Spinner> </Spinner>}
          {todo && todo.map((obj) => (
            <ListGroupItem key={obj.id}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'larger'}}>
              <div style={{textDecoration: obj.completed ?'line-through':'none', display:'flex', justifyContent:'center', alignItems:'center'}}>{obj.task}</div>
              <div>
                <span style={{color:'darkred'}} onClick={()=>handleDelete(obj.id)}><FaRegTrashAlt /></span>
                <span style={{paddingLeft:'15px', color: obj.completed ?'green':'gray'}} onClick={()=>checkMark(obj.id)}><IoCheckmarkDoneSharp /></span>
              </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        {todo && <TodoSummary handleSummary={handleSummary}/>}
      </div>
    <div style={{fontSize:'xx-large', position:'fixed', top:'5px', left:'5px'}} onClick={()=>allClear()}><FaRegTrashAlt /></div>
    <Button onClick={()=>setIsLoggedIn(false)} style={{position:'fixed', top:'5px', right:'5px'}}>Log Out</Button>
    </>
  );


};