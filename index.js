const express = require('express');
const app = express();
const PORT = process.env.PORT;

//Endpoint que responde un mensaje
app.get('/', (_req, res) => {
  res.send('Integracion continua funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
