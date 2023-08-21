import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('Location',{
    id:{
      type : DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    name:{
      type:DataTypes.STRING(60),
      unique:true,
    },
    type:{
      type:DataTypes.STRING(50),
      allowNull:false,
    },
    dimension:{
      type:DataTypes.STRING(50),
      allowNull:false,
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
  },{
    timestamps:false,
  });
};