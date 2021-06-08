const axios = require('axios');

const instanceAxios = axios.create({
    baseUrl: 'https://api.pagar.me/1/',
    params: {
        api_key: 'ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0'
    }

});

module.exports = instanceAxios;