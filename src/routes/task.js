import { Router } from "express";
import { getTask, saveTask, getTaskCount, getTasks, updateTask, deleteTask } from "../controllers/task";

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask );
router.get('/tasks/count', getTaskCount);
router.post('/tasks', saveTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

export default router;