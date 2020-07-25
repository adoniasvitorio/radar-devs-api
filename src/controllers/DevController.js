const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        const techs_array = parseStringAsArray(techs);

        let dev = await Dev.findOne({ github_username });
        if (!dev) {
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = api_response.data;

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techs_array,
                location
            });
        }
        return response.json(dev);
    }
};