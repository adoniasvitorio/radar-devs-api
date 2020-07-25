const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/', (request, response) =>{
    return response.json({ message: 'hello world' });
});

routes.post('/devs', async(request, response) =>{
    
    const { github_username } = request.body;
    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(api_response.data);

    return response.json({message: 'hello dev'});
});

module.exports = routes;