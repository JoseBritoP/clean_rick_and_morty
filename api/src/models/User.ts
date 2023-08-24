import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('User',{
    id:{
      type : DataTypes.INTEGER,
      primaryKey:true,
      // defaultValue: DataTypes.UUIDV4
      autoIncrement:true,
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
    active:{
      type:DataTypes.BOOLEAN,
      defaultValue: true
    },
    banned:{
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    timestamps:false
  });
};