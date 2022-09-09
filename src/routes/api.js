import { Router } from 'express';
import { newPersonal, getAllPersonal, getPersonal, updatePersonal, deletePersonal } 
    from "../controllers/api/personal";

const routerApi = Router();

routerApi.get('/api', (req, res) => {
    res.status(200).json({'message': 'Api is online!'});
})

routerApi.post('/api/personal', newPersonal);
routerApi.get('/api/personal', getAllPersonal);
routerApi.get('/api/personal/:id', getPersonal);
routerApi.put('/api/personal/:id', updatePersonal);
routerApi.delete('/api/personal/:id', deletePersonal);

export default routerApi;