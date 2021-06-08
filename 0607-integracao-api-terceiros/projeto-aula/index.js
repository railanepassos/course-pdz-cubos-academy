/**
 * Midware de meu servidor
 */

const express = require('express');
const routes = require('../projeto-aula/routes');

const app = express();
app.use(express.json());

/**

    app.get('/', (req, res) => {
        return res.json('success');

    });

*/

// Usando as rotas criadas no arquivo rotas.js
app.use(routes);

app.listen(8000);