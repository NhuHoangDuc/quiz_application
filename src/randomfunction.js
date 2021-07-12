export default function Randomnumber(pCount, pMin, pMax) {
  var min = pMin < pMax ? pMin : pMax;
  var max = pMax > pMin ? pMax : pMin;
  var resultArr = [],
    randNumber;
  while (pCount > 0) {
    randNumber = Math.round(min + Math.random() * (max - min));
    if (resultArr.indexOf(randNumber) === -1) {
      resultArr.push(randNumber);
      pCount--;
    }
  }
  return resultArr;
}