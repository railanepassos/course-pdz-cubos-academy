const axius = require('axios');

const instanceAxius = axius.create({
    baseUrl: 'https://api.pagar.me/1/',
    params: {
        api_key: 'ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0'
    }

});

module.exports = instanceAxius;