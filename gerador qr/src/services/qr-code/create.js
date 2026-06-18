import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  return new Promise((resolve) => {
    prompt.start();
    prompt.get(promptSchemaQRCode, async (err, result) => {
      await handle(err, result);
      resolve();
    });
  });
}

export default createQRCode;
