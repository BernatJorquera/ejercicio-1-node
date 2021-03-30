const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {
  fs.writeFile("C:/Users/Matí/Desktop/FE_Curs/C3/ejercicio-1-node/textos/saludo.txt", `Hola, ${nombre}. Encantado de saludarte.`, (err) => {
    if (err) {
      console.log(chalk.red.bold("¡¡¡HA HABIDO UN ERROR!!!\n") + err + chalk.yellow("\nAbortando ejecución."));
      process.exit(1);
    }
    console.log(chalk.green("Archivo creado o sobreescrito con éxito"));
  });
};

module.exports = guardarSaludo;
