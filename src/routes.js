const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (request, response) =>{
    return response.json({ message: 'hello world' });
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;