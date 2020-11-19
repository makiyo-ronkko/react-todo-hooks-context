import React from 'react';
import { TodosProvider } from './context/todos.contex';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
	// const initialTodos = [{ id: 1, task: 'Pet a Monkey', completed: false }];

	// const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
	// 	initialTodos
	// );

	// useEffect(() => {
	// 	window.localStorage.setItem('todos', JSON.stringify(todos)); // to string
	// 	// localStorage.getItem("todos") on console
	// }, [todos]);

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>

			<Grid container justify='center' style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;

/*
- TodoApp
 - TodoForm
 - TodoList
  - TodoItem
*/

// id, task, completed
