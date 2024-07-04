import { Sequelize, DataTypes } from 'sequelize'
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
   host: process.env.DATABASE_HOST,
   dialect: 'mysql',
   username: process.env.DATABASE_USERNAME
})

export const Post = sequelize.define('Post', {
   title: {
      type: DataTypes.STRING,
      allowNull: false
   },
   link: {
      type: DataTypes.STRING,
      allowNull: false
   },
   pubDate: {
      type: DataTypes.DATE,
      allowNull: false
   }
})

