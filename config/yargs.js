const colors = require('colors');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base de tabla de multiplicar',
        default: 1
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'lista tabla de multiplicar',
        default: false
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limite de la tabla de multiplicar',
        default: 1
        
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'.underline.red
        }
        if (isNaN(argv.h)){
            throw 'Hasta debe ser un numero'.underline.red
        }
        return true;
    })
    .argv;

    module.exports = argv;