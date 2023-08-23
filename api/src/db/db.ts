import 'dotenv/config';
import { Sequelize } from "sequelize";

// Models
import CharacterModel from '../models/Character';
import EpisodeModel from '../models/Episode';
import LocationModel from '../models/Location';
import UserModel from '../models/User';
// Credentials

const DB_USER = <string>process.env.DB_USER;
const DB_PASSWORD = <string>process.env.DB_PASSWORD;
const DB_HOST =<string>process.env.DB_HOST;
const DB_NAME = <string>process.env.DB_NAME;
const DB_PORT = <string>process.env.DB_PORT;

// Instancia de sequelize

export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false });

// Definición de modelos

CharacterModel(sequelize);
LocationModel(sequelize);
EpisodeModel(sequelize);
UserModel(sequelize);

// Destructuring del modelo

export const {Character,Episode,Location,User} = sequelize.models

// Relation

//n:n

Character.belongsToMany(User,{through:"UserCharacterFavorite"});
User.belongsToMany(Character,{through:"UserCharacterFavorite"});

// Character.belongsToMany(Episode,{through:"CharacterEpisodes"});
// Episode.belongsToMany(Character,{through:"CharacterEpisodes"});

Location.belongsToMany(Character,{through:"CharacterLocation"});
Character.belongsToMany(Location,{through:"CharacterLocation"});