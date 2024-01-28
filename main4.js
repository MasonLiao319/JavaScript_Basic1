(function () {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomArray(length, min, max) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push(getRandomInt(min, max));
        }
        return randomArray;
    }

    function checkPrimesInArray(array) {
        function isPrime(num) {
            if (num <= 1) {
                return false;
            }
            if (num === 2) {
                return true;
            }
            // Loop from 2 to the square root of the number
            for (let i = 2; i <= Math.sqrt(num); i++) {
                // If the number is divisible by any i, it is not prime
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        // Code to be executed for each 'num' in the 'array'
        for (let num of array) {
            if (isPrime(num)) {
                console.log(num + "-yes,");
            } else {
                console.log(num + "-no,");
            }
        }
    }

    // Generate an array of 10 positive random numbers between 1 and 100
    let myRandomArray = generateRandomArray(10, 1, 100);

    // Check for primes in the generated array
    checkPrimesInArray(myRandomArray);

})();
