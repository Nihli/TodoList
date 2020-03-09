import React from 'react'
import TodoListItem from './TodoListItem'
import './Styles.css'

export default class TodoList extends React.Component {
    state = {
        list_title: "List!",
        todos: [
            {
                title: 'write a story, gal',
                completed: false
            },
            {
                title: 'exercise today',
                completed: true
            }
        ]
    }

    render (){
        return (
            <div className="todoList">
                <h2> To do List</h2>
                <label>Title</label>
                <br />
                <input placeholder="Enter a title..." type="text" value={this.state.list_title}/>
                <br />

                {
                    this.state.todos.map(todo => {
                        return (
                            <div>
                               <TodoListItem title={todo.title} completed={todo.completed}/>
                            </div>
                        )
                    })
                }

                <input placeholder="To do item name"/>
                <button>Add Item to List</button>
            </div>
        )
    }
}