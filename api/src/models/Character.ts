import { Sequelize,DataTypes } from "sequelize";

export default (sequelize:Sequelize) =>{
  sequelize.define('Character',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    name:{
      type:DataTypes.STRING(155),
      allowNull : false,
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
    origin:{
      type: DataTypes.JSONB() ,
      allowNull:false
    },
    type:{
      type:DataTypes.STRING(),
      defaultValue:'',
    }
  });
};