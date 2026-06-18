import dotenv from "dotenv";
import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

dotenv.config();

async function main() {
  prompt.start();

  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) return console.error(err);

    const selection = Number(choose.select);
    if (selection === 1) await createQRCode();
    else if (selection === 2) await createPassword();
    else console.log("Opção inválida");
  });
}

main();
