const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad',
        demand: true
    }
}).argv;
//
// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// });

// clima.getClima(52.5244, 13.4105).then(resp => {
//     console.log(resp);
// });

const getInfo = async(direccion) => {
    try {
        const ciudad = await lugar.getLugarLatLng(direccion);
        const lat = ciudad.lat;
        const lng = ciudad.lng;
        const climaLugar = await clima.getClima(lat, lng);
        return (`El clima de ${direccion} es ${climaLugar}`);

    } catch (e) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }


}

getInfo(argv.direccion).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
})