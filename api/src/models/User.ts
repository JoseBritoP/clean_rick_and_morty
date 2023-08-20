import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('User',{
    id:{
      type : DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
    },
    email:{
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true
    },
    password:{
      type:DataTypes.STRING(100),
      allowNull:false,
    },
  },{
    timestamps:false
  });
};