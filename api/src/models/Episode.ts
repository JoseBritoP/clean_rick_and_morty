import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('Episode',{
    id:{
      type : DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    name:{
      type:DataTypes.STRING(60),
      allowNull:false,
      unique:true
    },
    air_date:{
      type:DataTypes.STRING(55),
      allowNull: false
    },
    episode:{
      type:DataTypes.STRING(25),
      allowNull:false,
    }
  },{
    timestamps:false
  });
};