const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

/*
  tipos de parametros:

  Query Params: parametros nomeados enviados na rota após o '?' (filtros , paginação)
  Route Params: parametros utilizados para identificar recursos
  Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

app.listen(3333)