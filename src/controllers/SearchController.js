const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techs_array = parseStringAsArray(techs);
       
        console.log(techs_array);
        return response.json({ devs: [] });
    }
}