const { Router } = require('express');
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controller/tasks.controller');

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks", updateTask);


module.exports = router;