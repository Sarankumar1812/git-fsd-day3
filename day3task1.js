//1. Do the below programs in anonymous function & IIFE

//1.print odd number in an array
//anonymous function
var logOddNumbers = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
};
logOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//IIFE
(function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//2.Convert all the strings to title caps in a string array
//anonymous function
var toTitleCase = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(toTitleCaps(["hello", "world", "javaScript"]));

//  IIFE
(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})(["hello", "world", "javaScript"]);

//3.Sum of all numbers in an array
//anonymous function
var sumArray = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));

//IIFE
(function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]);


//4.Return all the prime numbers in an array
//anonymous function
var getPrimes = function(array) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return array.filter(isPrime);
};

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE
(function(array) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    var primes = array.filter(isPrime);
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//5.Return all the palindromes in an array
//anonymous function
var getPalindromes = function(array) {
    var isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    return array.filter(isPalindrome);
};

console.log(getPalindromes(["sharan", "hello", "sky", "world"]));

//IIFE
(function(array) {
    var isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    var palindromes = array.filter(isPalindrome);
    console.log(palindromes);
})(["sharan", "hello", "sky", "world"]);

//6.Return median of two sorted arrays of the same size
//anonymous function
var getMedian = function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    var mid = mergedArray.length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};

console.log(getMedian([1, 3, 5], [2, 4, 6]));

//IIFE
(function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    var mid = mergedArray.length / 2;
    var median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);

//7.Remove duplicates from an array
//anonymous function
var removeDuplicates = function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
};

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7]));

//IIFE
(function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 2, 3, 4, 4, 5, 6, 6, 7]);

//8.Rotate an array by k times
//anonymous function
var rotateArray = function(array, k) {
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);
    return array;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

//IIFE
(function(array, k) {
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);
    console.log(array);
})([1, 2, 3, 4], 2);

