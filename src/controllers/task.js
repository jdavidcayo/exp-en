import { connect } from '../database';


export const getTasks = async (req, res) =>{
    try{
        const conn = await connect();
        const result = await conn.query( 'SELECT * FROM tasks' )
        conn.end();
        res.json(result[0])
    }catch (e){
        res.json({"message": "query failed!"});
    }
};

export const getTask = async (req, res) =>{
    try{
        const conn = await connect();
        const row = await conn.execute( `SELECT * FROM tasks WHERE id=?`, [ req.params.id ]);
        conn.end();
        const [task] = row[0] ;
        res.json( task );
    } catch ( e ){ 
        res.json({"message": "Unable to find id"});
    }
};

export const getTaskCount = async (req, res) =>{
    try{
        const conn = await connect();
        const cantRegistros = await conn.query(`SELECT COUNT(*) AS nRegistros FROM tasks`);
        const [nRegistros] = cantRegistros[0];
        conn.end();
        res.json(nRegistros);
    } catch ( e ){
        res.json({ "message": "Unable to find the total count of items"});
    }
};

export const updateTask = async (req, res) =>{
    try{
        const conn = await connect();
        const result = await conn.execute(`UPDATE tasks SET title=?, description=? WHERE id=?`, [req.body.title, req.body.description, req.params.id]);
        res.json({"message": "Updated!"});
    } catch ( e ){
        res.json({"message": "Update failed!"});
    }
};

//  /tasks/:id - deleteTask
export const deleteTask = async (req, res) =>{
    try{
        const conn = await connect();
        const result = await conn.execute(`DELETE FROM tasks WHERE id=?`, [ req.params.id ]);
        res.json({"message": "Deleted!"});
    } catch ( e ){
        res.json({ "message": "Delete failed!"});
    }
};

export const saveTask = async(req, res) => {
    try{
        const conn = await connect();
        const result = await conn.execute
                        (`INSERT INTO tasks (title, description) VALUES (?,?)`, [req.body.title, req.body.description]);                                     
        conn.end();
        res.json({"message": `Saved on id: ${result[0].insertId}`});
    } catch ( e ){
        res.json({"message": "Save task failed!"});
    }
}