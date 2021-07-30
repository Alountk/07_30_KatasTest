function printerError(s) {
  // your code
  const alpha = Array.from(Array(13)).map((e, i) => i + 65);
  const alphabet = alpha
    .map((x) => String.fromCharCode(x).toLowerCase())
    .join(""); //?
  const filterError = s
    .split("")
    .filter((char) => !alphabet.includes(char)).length; //?
  const result = `${filterError}/${s.length}`;
  return result;
}
module.exports = printerError;
