setTimeout(function(){
    var firstName = prompt("Hello and Welcome. Please enter your First name:");
    var lastName = prompt("Please enter your Last name:");
    var age = prompt("Please enter you age:")
    var height = prompt("How tall are you in centimeters?");
    var petName = prompt("What is the name of your pet?");
    alert("Thank you so much for the information.");


    //Logic


    //Four Conditions
    var nameCond = null;
    var ageCond = null;
    var heightCond = null;
    var petCond = null;


    //Name Condition
    if(firstName[0] === lastName[0]){
        nameCond = true;
    } else {
        nameCond = false;
    }

    //Age Condition
    if(age > 20 && age < 30) {
        ageCond = true;
    }else {
        ageCond = false;
    }

    //Height Condition
    if(height >= 170) {
        heightCond = true;
    } else {
        heightCond = false;
    }

    //Pet Name Condition
    if(petName[petName.length -1] === 'y') {
        petCond = true;
    }else {
        petCond = false;
    }

    //Check all Conditions
    if(nameCond && ageCond && heightCond && petCond) {
        console.log("WELCOME SPY!");
    }else {
        console.log("Nothing to see here");
    }

    // var firstName = prompt("Hello and Welcome. Please enter your First name:");
    // console.log(firstName);
    //
    // var lastName = prompt("Please enter your Last name:");
    // console.log(lastName);
    //
    // var age = prompt("How old are you?:")
    // console.log(age);
    //
    // var height = prompt("How tall are you in centimeters:")
    // console.log(height);
    //
    // var petName = prompt("What is the name of your pet?:")
    // console.log(petName);
    //
    // alert("Thank you so much for the information.");
    //
    // if((firstName[0] === lastName[0]) && (age > 20 && age < 30) && (height >= 170) && (petName.charAt(petName.length -1) === "y")) {
    //     console.log("Welcome Comrade! You've passed the Spy Test");
    // }

}, 1000);
