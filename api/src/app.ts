import { server } from './index'
import { sequelize } from './db/db';

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>{
  sequelize.sync({alter:true})
  console.log(`Server on port ${PORT}`);
});