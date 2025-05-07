import express from 'express'
import { fetching, create, taskDelete, update, markComplete, allTaskDelete } from '../controller/taskController.js'
import verifyToken from '../validations/tokenValidation.js'
const taskRouter = express.Router()

taskRouter.get('/', verifyToken, fetching)
taskRouter.post('/', verifyToken, create)
taskRouter.delete('/', verifyToken, taskDelete)
taskRouter.delete('/tasks-delete', verifyToken, allTaskDelete)
taskRouter.put('/', verifyToken, update)
taskRouter.patch('/', verifyToken, markComplete)

export default taskRouter