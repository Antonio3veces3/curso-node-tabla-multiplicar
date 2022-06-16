const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;


crearArchivo(base, listar, hasta)
    .then(console.log)
    .catch(console.log);

