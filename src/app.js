import express from 'express';
import  tasksRoutes  from "./routes/task";   

const app = express();

//middlewares
app.use( express.json() );

app.use( tasksRoutes );

export default app;