
const express = require('express');
const sequelize = require('../config/database');
const playersRoutes = require('./routes/players');


const app = express();
app.use(express.json());

app.use('/players', playersRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada.');
}).catch((error) => console.error('Error:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
