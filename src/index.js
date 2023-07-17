const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Todo = require('./todo');

const app = express();

main().catch(console.err);

app.use(morgan('dev'));
app.use(express.json());

app.get('/todo/:id', async (req, res) => {
	const todoId = req.params.id;
	const todo = await Todo.findById(todoId);
	
});

app.get('/todos', async (req, res) => {
	const todos = await Todo.find({});
	res.json(todos); 
});

app.post('/todo', async (req, res) => {
	const todoToCreate = req.body.todo;
	const createTodo = await Todo.create(todoToCreate);
	res.json(createTodo)
});

app.put('/todo/:id', async (req, res) => {
	const todoId = req.params.id;
	const todoUpdate = req.body.todo; 
	const update = await Todo.findByIdAndUpdate(todoId, todoUpdate, {})
	res.json(update)
});

app.delete('/todo/:id', async (req, res) => {
	const todoId = req.params.id;
	const deleteTodo = await Todo.findByIdAndRemove(todoId);
	
	res.json(deleteTodo);
});

async function main() {
	app.listen(9000, () => console.log('server on'));

	const db = 'practice-mongodb';
	const url = 'mongodb://127.0.0.1:27017/';

	await mongoose.connect(url + db);
}
