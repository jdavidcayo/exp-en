import mysql from "mysql2/promise";
import { config } from "./config";

export const connect = async ()=> {
    try{
        const conn = await mysql.createConnection( config );
        console.log('db is connected!')
        return conn;
    }catch( e ){
        console.log( e );
    }
} 

