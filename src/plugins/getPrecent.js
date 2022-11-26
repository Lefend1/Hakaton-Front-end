module.exports = (a, b, time) => {
  if (time === "today") {
    a = parseInt(a?.today);
    b = parseInt(b?.today);
  } else if (time === "week") {
    a = parseInt(a?.week);
    b = parseInt(b?.week);
  } else if (time === "total") {
    a = parseInt(a?.total);
    b = parseInt(b?.total);
  }
  return ((a - b) / b) * 100;
};
