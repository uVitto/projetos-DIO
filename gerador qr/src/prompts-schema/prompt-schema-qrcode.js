import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR Code"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow("Tipo de saída: 1 - NORMAL, 2 - TERMINAL"),
    pattern: /^[12]$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
