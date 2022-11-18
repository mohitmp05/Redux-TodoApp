import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import Footer from './components/Footer';
import Img1 from './Images/main.svg'
import './App.css'

const App = () => {
	useEffect(() => {
    document.title = "TodoApp";
  });

	return (
		<div id="body" className="ui two column grid">
		<div className="row">
		<div id='brand' className='column'>
		<img src={Img1} className="ui image" />
		</div>
		<div className='container column' id='form'>
			<div id='container'>
			<h2 class="ui header">
			<i class="tasks icon"></i>
  <div class="content">
    TodoApp
    <div class="sub header">Manage your tasks at one place</div>
  </div>
</h2>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
			</div>
		</div>
		<Footer/>
		</div>
		</div>
	);
};

export default App;
