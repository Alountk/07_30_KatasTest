function orderByNumberString(num) {
  return Number.parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

module.exports = orderByNumberString;
