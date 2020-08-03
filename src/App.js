import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
import './App.css'
function addTask(obj, task) {
  obj.todo.push({
    task: task,
    id: Date.now(),
    completed: false,
  })
  return obj;
}

function editTask(obj, id) {
  for (let i=0;i<obj.todo.length;i++) {
    if (obj.todo[i].id === id) {
      obj.todo[i].completed = !obj.todo[i].completed
    }
  }
  return obj;
}

function handleClearing(obj) {
  const filtered = obj.todo.filter(item => item.completed === false)
  console.log(filtered)
  obj.todo = filtered;
  return obj;
}
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo : [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  handleAdd = task => {
    this.setState(addTask(this.state, task));
  };

  todoChange = (id) => {
    this.setState(editTask(this.state, id));
  }

  handleClear = () => {
    this.setState(handleClearing(this.state));
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoChange={this.todoChange} list={this.state.todo}/>
        <TodoForm handleClear={this.handleClear} onAdd={this.handleAdd}/>
      </div>
    );
  }
}


export default App;
