const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} = require("./../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo); //this works fine

todoRouter.get("/todo", getTodoById); //this works fine but naming could change

todoRouter.get("/todos/completed", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.put("/todos/:id", completeTodo);

todoRouter.put("/todo", updateTodo);

todoRouter.delete("/delete/:id", deleteTodo);

module.exports = todoRouter;
