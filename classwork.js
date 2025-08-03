/*Create a JavaScript program that calculates the price of a movie ticket based on the user's age and the day of the week.
Instructions:
Create a function called calculateTicketPrice(age, day) that:


Takes in two parameters:
age (a number)
day (a string representing the day of the week)
Returns the ticket price based on the following conditions:
Use if statements to set the base price based on age:

Children (below 12 years) pay $5
Teenagers (13-17 years) pay $8
Adults (18-59 years) pay $12
Seniors (60+ years) pay $6
*/

/*function calculateTicketPrice(age, day) {
    let basePrice;

    if (age <= 12) {
        basePrice = 5; 
    }
    
    else if (age => 13 && age <= 17) {
        basePrice = 8
    }
    else if (age => 18 && age <= 59) {
        basePrice = 12
    }
    else (age >= 60) {
        basePrice = 6; 
    }
}
console.log (calculateTicketPrice(10, Monday));
*/

function calculateTicketPrice(age, day) {
    let basePrice;

    // Determine base price based on age
    if (age < 12) {
        basePrice = 5; // Children
    } else if (age >= 13 && age <= 17) {
        basePrice = 8; // Teenagers
    } else if (age >= 18 && age <= 59) {
        basePrice = 12; // Adults
    } else {
        basePrice = 6; // Seniors (60+)
    }


    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WL5YL5HZ89"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WL5YL5HZ89');
</script>

    // Apply discount based on day of the week
    let finalPrice = basePrice; // Start with the base price
    switch (day.toLowerCase()) { // Convert to lowercase to handle case sensitivity
        case "saturday":
        case "sunday":
            finalPrice *= 0.9; // Apply 10% discount
            break;
        default:
            // No discount for weekdays (Monday to Friday)
            break;
    }

    // Return the final price rounded to 2 decimal places
    return `Your ticket price is $${finalPrice.toFixed(2)}`;
}

// Example usage
console.log(calculateTicketPrice(10, "Monday"));   // Output: "Your ticket price is $5.00"
console.log(calculateTicketPrice(16, "Saturday")); // Output: "Your ticket price is $7.20"
console.log(calculateTicketPrice(25, "Sunday"));   // Output: "Your ticket price is $10.80"
console.log(calculateTicketPrice(65, "Wednesday"));// Output: "Your ticket price is $6.00"



// Get user input using prompt()
let userAge = prompt("Enter your age:");
let userDay = prompt("Enter the day of the week:");

// Call function with user input
alert(calculateTicketPrice(userAge, userDay));