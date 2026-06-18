import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
  const password = [];

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10) || 12;
  const characters = permittedCharacters();

  if (!characters || characters.length === 0) {
    throw new Error(
      "Nenhum caractere permitido configurado. Defina variáveis de ambiente para permitir caracteres."
    );
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password.push(characters[index]);
  }

  return password.join("");
}

export default handle;
