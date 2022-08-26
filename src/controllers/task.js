import { connect } from '../database';


export const getTasks = async (req, res) =>{
    const conn = await connect();
    const result = await conn.query( 'SELECT * FROM tasks' )
    conn.end();
    res.json(result[0])
};

export const getTask = async (req, res) =>{
    const id = req.params.id;
    console.log( id );
    const conn = await connect();
    const row = await conn.execute( `SELECT * FROM tasks WHERE id=?`, [id]);
    conn.end();
    res.json( row[0] );
};

export const getTaskCount = async (req, res) =>{
    const conn = await connect();
    const cantRegistros = await conn.execute(`SELECT COUNT(*) FROM task`)
    console.log( cantRegistros );
    res.json({'nRegistros': cantRegistros });
};

export const updateTask = (req, res) =>{
    res.json({'Saludo': 'Hola mondo!'});
};

export const deleteTask = (req, res) =>{
    res.json({'Saludo': 'Hola mondo!'});
};

export const saveTask = (req, res) => {
    res.json({ 'message': 'saved'});
}