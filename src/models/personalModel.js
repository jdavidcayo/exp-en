import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelizeConnection'

//Model
const Personal = sequelize.define('Personal', {
    name: { type: DataTypes.STRING,
            allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    dni: {
        type:DataTypes.STRING,
    },
    tel: DataTypes.STRING,
    date: DataTypes.DATE,
    avatar: DataTypes.STRING,
})


export default Personal;