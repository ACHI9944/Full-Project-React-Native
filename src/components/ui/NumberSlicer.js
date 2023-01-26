function NumberSlicer(num) {
  if (num >= 1000 && num < 10000) {
    return `${num.toString().slice(0, 1)}k`;
  } else if (num >= 10000 && num < 100000) {
    return `${num.toString().slice(0, 2)}k`;
  } else if (num >= 100000 && num < 1000000) {
    return `${num.toString().slice(0, 3)}k`;
  } else if (num >= 1000000 && num < 10000000) {
    return `${num.toString().slice(0, 1)}m`;
  } else if (num >= 10000000 && num < 100000000) {
    return `${num.toString().slice(0, 2)}m`;
  } else if (num >= 100000000 && num < 1000000000) {
    return `${num.toString().slice(0, 3)}m`;
  } else return num;
}

export default NumberSlicer;
