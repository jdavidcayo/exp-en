import express from 'express';
import morgan from 'morgan';
import  tasksRoutes  from "./routes/task";
import { stream } from "./fileStream/rfs"; //rotating-file-stream

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import { options } from "./swOptions";

const app = express();


//middlewares
app.use( express.json() );
app.use( morgan('combined', { stream }));


app.use( tasksRoutes );
const specifications = swaggerJsDoc(options);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(specifications));

export default app;