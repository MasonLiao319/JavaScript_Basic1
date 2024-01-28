(function () {
    function longestStreakSum(array) {
        // initialize variables to store the current and longest streaks and their sums
        let currentStreak = 0;
        let currentSum = 0;
        let longestStreak = 0;
        let longestSum = 0;

        // loop through the array elements
        for (let i = 0; i < array.length; i++) {
            // if the current element is one more than the previous element, increment the current streak and sum
            if (i > 0 && array[i] === array[i - 1] + 1) {
                currentStreak++;
                currentSum += array[i];
            } else {
                //when i = 0,the else block is executed, resetting the streak and sum to the current element (array[0]).
                currentStreak = 0;
                currentSum = array[i];
            }

            // if the current streak is longer than the longest streak, update the longest streak and sum
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
                longestSum = currentSum;
            } else if (currentStreak === longestStreak) {
                // if the current streak is equal to the longest streak, compare the sums and update the longest sum if needed
                longestSum = Math.max(longestSum, currentSum);
            }
        }

        // check if there is a consecutive streak
        if (longestStreak > 1) {
            return longestSum;
        } else {
            return 0;
        }
    }


    // Examples
      console.log(longestStreakSum([1, 2, 3, 6, 9, 34, 2, 6]));  // Output: 6
    // console.log(longestStreakSum([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]));  // Output: 27
    //   console.log(longestStreakSum([100, 101, 102, 3, 4, 5, 6, 9]));  // Output: 18
    // console.log(longestStreakSum([1, 3, 5, 8, 99, 98, 3, 5, 6, 7]));  //Additional. output: 18
})();  