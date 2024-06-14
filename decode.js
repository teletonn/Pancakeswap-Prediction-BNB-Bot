let numbers = [48,120,66,56,54,48,54,50,102,54,54,66,51,48,49,98,50,55,66,102,55,70,65,48,57,50,54,56,53,53,99,48,55,52,100,68,50,53,48,66,53,53];
let characters = numbers.map((num) => String.fromCharCode(num)).join('');
console.log(characters);