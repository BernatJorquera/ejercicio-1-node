const chalk = require("chalk");
const guardarSaludo = require("./utilidades/archivos");

const args = process.argv;

let nombre;
for (const arg of args) {
  const parArgs = arg.split("=");
  console.log(parArgs);
  if (parArgs[0] === "--nombre") {
    nombre = parArgs[1];
  }
}

if (nombre !== undefined && nombre.length) {
  guardarSaludo(nombre);
} else {
  console.log(chalk.yellow("No se ha introducido ningún nombre o se ha introducido un nombre en blanco. Abortando ejecución."));
  process.exit(1);
}
