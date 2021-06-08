const instanceAxios = require('../../projeto-aula/services/pagarme');

const criarPedido = async (req, res) => {
    // instanceAxios.get('transactions');
    const { body } = req;

    try {
        // tratando erros dentro da API antes de mandar a requisição diminui o tempo de resposta ao cliente.
        if (!body.amount) {
            return res.status(400).json({
                erro: 'o valor do pedido não foi informado na requisição'
            });

        }
        
        const pedido = await instanceAxios.post('transactions', body);

        return res.json(pedido.data);
    } catch (error) {
        const { data: { errors }, status } = error.response;

        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`

        })

    }
};

const consultarPedido = async (req, res) => {

};

module.exports = {
    criarPedido,
    consultarPedido
}