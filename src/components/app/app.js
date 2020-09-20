import React, { Component } from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

    state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    } 

    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const newArr = [...todoData].filter( el => el.id !== id)
        return {
          todoData: newArr
        }
      })
    }

    addItem = (text)=> {
      this.setState(({ todoData } ) => {
        const newItem = {
          label: text,
          important: false,
          id: Date.now()
        }

        return {
          todoData: [...todoData, newItem]
        } 
        
      })
    };
    
    render () {
      return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <TodoList 
          todos={this.state.todoData}
          onDeleted = { this.deleteItem } />
          <ItemAddForm onItemAdded={this.addItem}/>
        </div>
      );
    }
  };