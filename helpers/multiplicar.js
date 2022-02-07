const fs = require("fs");
var colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }

    if (listar) {
      console.log("=======================".yellow);
      console.log(`    TABLA DEL ${base}  `.yellow);
      console.log("=======================".yellow);
      console.log(salida.rainbow);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    // console.log(`Tabla-${base}.txt ha sido creado satisfactoriamente!!!`);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if(err) throw err;
//     console.log(`Archivo de la tabla del ${base} creado....`);
// });
