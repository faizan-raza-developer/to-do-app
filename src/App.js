import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
       <div className="container">
             <div className="row">
                   <div className="col-sm-12 text-center">   
                       <img src="/images/rc-logo-white.png" className="img-fluid col-sm-3" alt="Royal Cyber" />             
                   </div>
             </div>
             <div className="row mt-5">
                  <div className="col-sm-6 mx-auto">
                                    <div className="center-container">
                        <h1 className="app-heading">TODO APP</h1>
                          <TodoInput addList={addList}/>

                          <hr/>
                          {listTodo.map((listItem,i)=>{
                            return (
                              <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
                            )
                          })}
                        </div>
                  </div>
             </div>
       </div>
     
    </div>
  )
}

export default App