const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    console.log(encodedUrl);
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '0f95bb87f6msh5a6d8119a0afd08p11274ajsn7ca40e882b4f' }
    });

    const resp = await instance.get();
    //  console.log(resp.data);
    if (resp.status != 200) {
        throw new Error(`No hay resultados para ${direccion}`);
    } else {
        const lat = resp.data.coord.lat;
        const lng = resp.data.coord.lon;
        const weather = resp.data.weather;

        return {
            lat,
            lng,
            weather
        }
    }
}

module.exports = {
    getLugarLatLng
}