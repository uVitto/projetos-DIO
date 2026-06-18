import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("Gerando senha..."));
  const password = await handle();
  console.log(chalk.green(`Senha gerada: ${password}`));
}

export default createPassword;
