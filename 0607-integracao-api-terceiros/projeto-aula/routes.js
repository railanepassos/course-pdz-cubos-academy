/**
 * Rotas que preciso para fazer minha API
 * 
 */

const express = require('express');
const pedidos = require('../projeto-aula/controller/order');
const rotas = express();

rotas.post('/criar-pedido', pedidos.criarPedido);
rotas.post('/consultar-pedido', pedidos.consultarPedido);


module.exports = rotas;