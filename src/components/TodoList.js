// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    render () {
        return (
            <div>
            {this.props.list.map((item) =>
                <Todo 
                todoChange={this.props.todoChange} 
                id={item.id} 
                key={item.id} 
                task={item.task} 
                completed={item.completed}/>
            )}
            </div>
        )
    }
}

export default TodoList;