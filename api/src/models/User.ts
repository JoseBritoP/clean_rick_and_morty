import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('User',{
    id:{
      type : DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    email:{
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true
    },
    password:{
      type:DataTypes.STRING(35),
      allowNull:false,
    },
  });
};