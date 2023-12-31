import { Sequelize,DataTypes, UUIDV4 } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('Character',{
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:UUIDV4
    },
    name:{
      type:DataTypes.STRING(155),
      allowNull : false,
      unique:true
    },
    image:{
      type:DataTypes.STRING(),
      allowNull:false,
    },
    status:{
      type:DataTypes.ENUM('Alive',"Death",'Unknown'),
      defaultValue:'Unknown',
    },
    species:{
      type: DataTypes.STRING(),
      allowNull:false
    },
    gender:{
      type: DataTypes.ENUM("Male","Female"),
      allowNull:false
    },
    type:{
      type:DataTypes.STRING(),
      defaultValue:'',
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
  },{
    timestamps:false
  });
};