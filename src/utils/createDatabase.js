import mysql from 'mysql2/promise'
import dotenv from "dotenv";
dotenv.config();

const createDatabase = async () => {
   try {
      const connection = await mysql.createConnection({
         host: process.env.DATABASE_HOST,
         user: process.env.DATABASE_USERNAME,
         password: process.env.DATABASE_PASSWORD
      })

      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_NAME}\`;`);
      console.log('Database created or already exists.');
      await connection.end();

   }  catch (error) {
      console.error('Error creating database:', error);
      process.exit(1);
   }
}

export default createDatabase;