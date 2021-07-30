function longest(s1, s2) {
  const newString = s1.concat(s2).split("").sort(); //?
  const result = newString
    .filter((item, pos) => newString.indexOf(item) == pos)
    .join(""); //?
  return result;
}

module.exports = longest;
