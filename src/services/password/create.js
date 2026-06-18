import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("Gerando senha..."));
  try {
    const password = await handle();
    console.log(chalk.yellow(`Senha gerada: ${password}`));
  } catch (err) {
    console.error(chalk.red("Erro ao gerar senha:"), err.message || err);
  }
}

export default createPassword;
