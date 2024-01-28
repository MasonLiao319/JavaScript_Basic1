(function () {

    function convert(inputString) {
        // Get the length of the input string
        const length = inputString.length;

        // Get the first and last letters of the input string in lowercase
        let firstLetter = inputString[0].toLowerCase();
        let lastLetter = inputString[length - 1].toLowerCase();

        let result;

        
        // Check if the first and last letters are the same
        if (firstLetter === lastLetter) {
            // If they are the same, reverse the input string
            result = inputString.split('').reverse().join(''); 
            //split(''): This converts the input string into an array of individual characters
            //.join(''): This joins the elements of the array into a single string.
        } else {
            //If they are different, remove the first and last letters
            //The first argument (1 here) is the starting index, and the second argument (-1 here) is the ending index. 
            result = inputString.slice(1, -1);
        }

        return result;

    }

    //Example:
    console.log(convert("mason")); //: “Triscuit” returns “tiucsirT” but “Cracker” returns “racke”.



})();