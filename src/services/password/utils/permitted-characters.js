function permittedCharacters() {
  const permitted = [];

  if (String(process.env.UPPERCASE_LETTERS).toLowerCase() === "true")
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (String(process.env.LOWERCASE_LETTERS).toLowerCase() === "true")
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");

  if (String(process.env.NUMBERS).toLowerCase() === "true")
    permitted.push(..."0123456789");

  if (String(process.env.SPECIAL_CHARACTERS).toLowerCase() === "true")
    permitted.push(..."!@#$%^&*()-_");

  return permitted;
}

export default permittedCharacters;
