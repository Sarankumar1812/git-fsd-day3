//Do the below programs in arrow functions.

//1.Print odd numbers in an array
const oddNumbers = (array) => {
   for (var i = 0; i < array.length; i++) {
       if (array[i] % 2 != 0) {
           console.log(array[i]);
       }
   }
};
oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//2.Convert all the strings to title caps in a string array
const titleCase = (str) => {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
   }
   return str.join(' ');
};
console.log(titleCase(["hello world", "javaScript"]));

//3.Sum of all numbers in an array
const sum = (array) => {
   var sum = 0;
   for (var i = 0; i < array.length; i++) {
       sum += array[i];
   }
   return sum;
};
console.log(sum([1, 2, 3, 4, 5]));

//4.Return all the prime numbers in an array
const getPrimes = (array) => {
   const isPrime = (num) => {
       if (num <= 1) return false;
       for (let i = 2; i <= Math.sqrt(num); i++) {
           if (num % i === 0) return false;
       }
       return true;
   };
   return array.filter(isPrime);
};

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//5.Return all the palindromes in an array
const getPalindromes = (array) => {
   const isPalindrome = (str) => {
       return str === str.split('').reverse().join('');
   };
   return array.filter(isPalindrome);
};

console.log(getPalindromes(["sharan", "hello", "sky", "world"]));
