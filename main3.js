(function(){

    function calTimeUntilBirthday(birthdate) {
        // assign the input birthdate to a variable
        // new Date(birthdate) is creating a new instance of the Date object, initializing it with the value of birthdate
        let nextBirthday = new Date(birthdate);
      
        // get the current date and time
        let now = new Date(); //default current date
      
        // calculate the difference,the result is in milliseconds
        let diff = nextBirthday - now;
      
        // convert the difference to seconds, minutes, hours, days, and weeks
        // Math.floor to round down the result to the nearest whole number. 
        let seconds = Math.floor(diff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
      
        // get the remaining seconds, minutes, hours, and days
        seconds = seconds % 60;//modulo operator (%) to get the remainder of the division. 
        minutes = minutes % 60;
        hours = hours % 24;
        days = days % 7;
      
        // when call calTimeUntilBirthday, we get an object with the properties showed below,and we can access them using dot like:result.weeks 
        return {
          weeks: weeks,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      }
      
      // Example:
      let myNextBirthday = "2024-03-19T00:00:00";
      let result = calTimeUntilBirthday(myNextBirthday);
      
      console.log("There are " + result.weeks + " weeks, " + result.days + " days, " + result.hours + " hours, " + result.minutes + " minutes, and " + result.seconds + " seconds until my next birthday!");
})();