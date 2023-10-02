function convertToRoman(num) {
  let numArr = String(+num).split("");
  let decimalPlaces = {
    ones: {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    },
    tens: {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
    },
    hundreds: {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    },
    thousands: {
      1: "M",
      2: "MM",
      3: "MMM",
    },
  };
  if (numArr.length === 1) {
    numArr[0] = decimalPlaces.ones[numArr[0]];
  } else if (numArr.length === 2) {
    numArr[0] = decimalPlaces.tens[numArr[0]];
    numArr[1] = decimalPlaces.ones[numArr[1]];
  } else if (numArr.length === 3) {
    numArr[0] = decimalPlaces.hundreds[numArr[0]];
    numArr[1] = decimalPlaces.tens[numArr[1]];
    numArr[2] = decimalPlaces.ones[numArr[2]];
  } else if (numArr.length === 4) {
    numArr[0] = decimalPlaces.thousands[numArr[0]];
    numArr[1] = decimalPlaces.hundreds[numArr[1]];
    numArr[2] = decimalPlaces.tens[numArr[2]];
    numArr[3] = decimalPlaces.ones[numArr[3]];
  }

  return numArr.join("");
}

export default convertToRoman;
