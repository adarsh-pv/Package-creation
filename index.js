const Addition = (num1,num2)=> {
    const result = num1+num2
    return result;
  }
const subtract = (num1,num2) =>{
  const result = num1-num2
  return result;
}
const isPalindrome = (str) => {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = sanitizedStr.split('').reverse().join('');
  return sanitizedStr === reversedStr;
};
  const palindrome = isPalindrome('malayalam')
  const addResult = Addition(2,2)
  const Subtract = subtract(3,1)
  module.exports = {Addition,subtract,isPalindrome};
