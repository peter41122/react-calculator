import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation, modeSwitch) {
  const one = Big(modeSwitch ? convertRomanToNumber(numberOne) : numberOne);
  const two = Big(modeSwitch ? convertRomanToNumber(numberTwo) : numberTwo);
  let res = ''
  if (operation === '+') {
    res = one.plus(two).toString();
  }
  if (operation === '-') {
    res = one.minus(two).toString();
  }
  if (operation === '*') {
    res = one.times(two).toString();
  }
  if (operation === '/') {
    res = one.div(two).toString();
  }
  return modeSwitch ? convertNumberToRoman(res) : res
}

function convertRomanToNumber(romanNumber) {
  const romanValue  = romanNumber.split('');
  const romanValueResult = calculatedValue(romanValue);
  return romanValueResult;
}

function convertNumberToRoman(num) {
  if (!+num)
      return false;
  var	digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
          "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
          "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  let val =  Array(+digits.join("") + 1).join("M") + roman;
  return val
}

function calculatedValue(values) {
  let result = romanChar_to_int(values[0]);
  let prev, curr;

  for(let i = 1; i < values.length; i++){
    curr = romanChar_to_int(values[i]);
    prev = romanChar_to_int(values[i-1]);
    if(curr <= prev){
      result += curr;
    }else{
      result = result -prev * 2 + curr;
    }
  }
  return result;
}

function romanChar_to_int(c){
  switch (c){
  case 'I': return 1;
  case 'V': return 5;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return -1;
  }
}