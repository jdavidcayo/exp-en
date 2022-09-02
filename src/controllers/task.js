import { connect } from '../database';


export const getTasks = async (req, res) =>{
    const conn = await connect();
    const result = await conn.query( 'SELECT * FROM tasks' )
    conn.end();
    res.json(result[0])
};

export const getTask = async (req, res) =>{
    //Realizar validaciones o implementar un middleware
    const id = req.params.id;
    console.log( id );
    const conn = await connect();
    const row = await conn.execute( `SELECT * FROM tasks WHERE id=?`, [id]);
    conn.end();
    res.json( row[0] );
};

export const getTaskCount = async (req, res) =>{
    const conn = await connect();
    const cantRegistros = await conn.query(`SELECT COUNT(*) AS nRegistros FROM tasks`);
    const [nRegistros] = cantRegistros[0];
    conn.end();
    res.json(nRegistros);
};

export const updateTask = async (req, res) =>{ //Realizar update de tarea
    const conn = await connect();
    //Realizar validaciones o implementar un middleware
    const id = req.params.id;
    const result = await conn.execute(`UPDATE tasks SET title=?, description=? WHERE id=?`, [req.body.title, req.body.description, id]);
    res.json({"message": "Updated!"});
};

//  /tasks/:id - deleteTask
export const deleteTask = async (req, res) =>{
    const id = req.params.id;
    const conn = await connect();
    const result = await conn.execute(`DELETE FROM tasks WHERE id=?`, [ id ]);
    res.json({"message": "Deleted!"});
};

export const saveTask = async(req, res) => {
    const taskTitle = req.body.title;
    const taskDescription = req.body.description;
    const conn = await connect();
    const result = await conn.execute
                    (`INSERT INTO tasks (title, description) VALUES (?,?)`, [taskTitle, taskDescription]);                                     
    conn.end();
    res.json({"message": `Saved on id: ${result[0].insertId}`});
}