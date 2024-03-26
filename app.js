
// Ask the user to enter his/her name as input.
var YourName = prompt("Please enter Your Name:")

// Ask the user to enter his/her gender as input. The answer should be either (male or female).
var gender = prompt("Please enter your gender (male or female):")

// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
var age = prompt("Please enter your age (ut should be >= 0):")

var ageconf = confirm("Are you sure that is is your age?" , age)

// check the age:
if (age <= 0) {
    alert("Your age must be more than zero!");
}

var askSkipMessage = confirm("Do you want to skip the welcoming message?")


// welcoming message:
var wMessage;
if (gender.toLowerCase() === "male") {
    wMessage= "Welcome mr. " + YourName;
    
    }else if (gender.toLowerCase() === "female") {
        wMessage= "Welcome ms. " + YourName + "!";
    } else {
        wMessage = "Welcome, " + YourName + "!";
    }
    if(askSkipMessage == true){
        console.log("You are Ready")
    } else if(askSkipMessage == false){
        alert(wMessage)
    }

    console.log("Your name is:", YourName)
    console.log("Your age after confirmation is", age)
    console.log("Welcoming message:", wMessage)


    let answerarr = [
        prompt ("Are you sure you are a " + gender + "?", "(Yes/No)") || "invalid",
        prompt ("Are you a student at ASAC? (Yes/No)" , "(Yes,No)") || "invalid",
        prompt ("Are you familier with JS? (Yes/No)", "(Yes,No)") || "invalid",
    ];


    
    answerarr.forEach(answer => console.log(answer));

   



