/**
 *  Tratando erros em nossa API
 *      Para tratarmos erros podemos antes de fazer uma promeça podemos validar previamente se os dados da requisição estão corretos. É possivel tratar os erros usando o segunte código de exemplo dentro de um try...cath
 *
 *  try {
    // tratando erros dentro da API antes de mandar a requisição diminui o tempo de resposta ao cliente.
        if (!body.amount) {
            return res.status(400).json({
                erro: 'o valor do pedido não foi informado na requisição'
            });

        }
 *  }
 *
 */