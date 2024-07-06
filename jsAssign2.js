// Q1.Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function calculateFactorial(n) {
    if (n < 0) {
        return "Input must be a non-negative integer.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = n; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calculateFactorial(5));


//Q.2 Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.  

const doubleArray = function(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
};

const numbers = [1, 2, 3, 4, 5];
const doubled = doubleArray(numbers);
console.log(doubled);


//Q.3 Define a function expression factorial that takes one number as a parameter and returns its factorial.

const factorial = function(n) {
    if (n < 0) {
        return "Input must be a non-negative integer.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        return result;
    }
};
console.log(factorial(5));


//Q.4 Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.

function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const number = [5,6,7,8,9];

const doubledNumbers = processArray(number, function(num) {
    return num * 2;
});

console.log(doubledNumbers);
