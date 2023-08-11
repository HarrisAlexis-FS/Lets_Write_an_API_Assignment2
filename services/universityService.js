const axios = require('axios');
require('dotenv').config();

const universityService = async () => {
    console.log("Real University Service");
    return await axios.get(`${process.env.universityURL}`)
};

const universityServiceByCountry = async (country) => {
    console.log(' Real University Service By Name');
    return await axios.get(`${process.env.universityURL}?country=${country}`)
};

module.exports = {universityService, universityServiceByCountry}