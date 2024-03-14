const {
    format
} = require('date-fns/format');
const dataHandler = require('../utils/dataHandler');

const createTask = async (req, res) => {
    try {
        const {
            titulo,
            descricao,
            usuarioId
        } = req.body;
        const data = await dataHandler.readData();
        const newTask = {
            id: data.tarefas.length + 1,
            usuarioId,
            titulo,
            descricao,
            status: 'pendente',
            dataCriacao: format(new Date(), 'dd/MM/yyyy HH:mm:ss'),
            dataConclusao: null
        };
        data.tarefas.push(newTask);
        await dataHandler.writeData(data);
        res.status(201).json({
            message: "Tarefa criada com sucesso!",
            task: newTask
        });
    } catch (err) {
        res.status(500).json({
            error: 'Erro ao criar tarefa'
        });
    }
};

const listTasks = async (req, res) => {
    try {
        const {
            status
        } = req.query;
        const data = await dataHandler.readData();
        let tasks = data.tarefas;
        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({
            error: 'Erro ao listar tarefas',
            detalhes: err.message
        });

    }
};

const updateTask = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            titulo,
            descricao,
            status
        } = req.body;
        const data = await dataHandler.readData();
        const taskIndex = data.tarefas.findIndex(task => task.id == id);
        if (taskIndex === -1) {
            return res.status(404).json({
                error: 'Tarefa não encontrada'
            });
        }
        const task = data.tarefas[taskIndex];
        task.titulo = titulo || task.titulo;
        task.descricao = descricao || task.descricao;
        task.status = status || task.status;
        if (status === 'concluída' && !task.dataConclusao) {
            task.dataConclusao = format(new Date(), 'dd/MM/yyyy HH:mm:ss');
        }
        await dataHandler.writeData(data);
        res.status(200).json({
            message: "Tarefa atualizada com sucesso!",
            task
        });
    } catch (err) {
        res.status(500).json({
            error: 'Erro ao atualizar tarefa',
            detalhes: err.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await dataHandler.readData();
        const taskIndex = data.tarefas.findIndex(task => task.id == id);
        if (taskIndex === -1) {
            return res.status(404).json({
                error: 'Tarefa não encontrada'
            });
        }
        data.tarefas.splice(taskIndex, 1);
        await dataHandler.writeData(data);
        res.status(200).json({
            message: "Tarefa deletada com sucesso!"
        });
    } catch (err) {
        res.status(500).json({
            error: 'Erro ao deletar tarefa'
        });
    }
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
};