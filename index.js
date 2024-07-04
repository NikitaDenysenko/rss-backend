import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { Post, sequelize } from "./src/models/post.model.js";
import createDatabase from "./src/utils/createDatabase.js";
import {startCronJob} from './src/tasks/cron.task.js'

const app = express()
const PORT = process.env.APP_PORT || 4000;

app.use(cors())
app.use(express.json());

dotenv.config();
startCronJob()


app.get('/posts', async (req, res) => {
   const limit = parseInt(req.query.limit) || 10; // Кількість записів на сторінку, за замовчуванням 10
   const offset = parseInt(req.query.offset) || 0; // Початкова точка для вибірки, за замовчуванням 0

   try {
      const { count, rows } = await Post.findAndCountAll({
         limit,
         offset,
      });

      res.json({
         total: count,
         posts: rows,
         limit,
         offset,
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});


const startServer = async () => {
   try {
      await createDatabase()
      await sequelize.sync({ force: false });
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   } catch (error) {
      console.error('Unable to start server:', error);
   }
}


startServer()