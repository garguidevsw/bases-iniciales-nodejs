const argv = require('./config/yargs');
var colors = require('colors');

const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'.blue) )
    .catch( err => console.log( colors.red(err) ));
