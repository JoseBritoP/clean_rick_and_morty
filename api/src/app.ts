import { server } from './index'
import { sequelize } from './db/db';

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>{
  sequelize.sync({force:true})
  console.log(`Server on port ${PORT}`);
});