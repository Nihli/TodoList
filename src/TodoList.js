import React from 'react'
import TodoListItem from './TodoListItem'
import './Styles.css'

export default class TodoList extends React.Component {
    
    constructor(){
        super()
        this.state = {
            list_title: "List!",
            current_value: 'valor',
            todos: [
               
            ]
        }

        this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this)
    }

   

    deleteTodoByIndex(index){
        console.log('index: ', index)
    }

    render (){
        return (
            <div className="todoList">
                <h2> To do List</h2>
                <label>Title</label>
                <br />
                <input
                    placeholder="Enter a title..." 
                    type="text" 
                    value={this.state.list_title}
                    onChange={(event)=> {this.setState({list_title: event.target.value})}} //é como usar this.state.list_title = event.target.value, mas o react não permite.
                />
                <br />

                {
                    this.state.todos.map((todo, index) => {
                        return (
                            <div>
                               <TodoListItem key={index} index={index} deleteTodoByIndex={this.deleteTodoByIndex} title={todo.title} completed={todo.completed}/>
                            </div>
                        )
                    })
                }

                <input
                    placeholder="To do item name"
                    value={this.state.current_value}
                    onChange={(event)=>{this.setState({current_value:event.target.value})}}
                />
                <button
                    onClick={()=>{
                        this.setState(prevState => //prevState vai guardar os objetos de todos para eles não serem perdidos sempre que é add novo todo.
                            ({
                                todos: prevState.todos.concat(
                                    {title: this.state.current_value, completed: false}
                                ),
                                current_value: ''
                            })
                        )}}
                >Add Item to List</button>
            </div>
        )
    }
}