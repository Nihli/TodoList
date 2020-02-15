import React from 'react'
import TodoListItem from './TodoListItem'
import './Styles.css'

export default class TodoList extends React.Component {
    render (){
        return (
            <div className="todoList">
                Our TodoList works!
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />
            </div>
        )
    }
}