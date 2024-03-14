const express = require('express');
const {
    createTask,
    listTasks,
    updateTask,
    deleteTask
} = require('../controllers/tasksController');
const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', listTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;