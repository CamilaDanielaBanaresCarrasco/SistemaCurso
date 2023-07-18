import { Sequelize } from "sequelize";

export const sequelize  = new Sequelize('postgres://postgres:ZSMjohzbIjHVU2vocMXt@containers-us-west-131.railway.app:7341/railway');

/* try {
    await sequelize.authenticate();
    console.log('La conexion se ah ejecutado con exito.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } */