/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (5*7);

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  5+5==10;

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  var thirtySix = 36;
  console.log(thirtySix * 6);

  return thirtySix;

};

// Variables 2
Exer.variables2 = function () {

  var title;

  title = 5; 

  return title;

};

// Variables 3
Exer.variables3 = function () {

  var favoriteBook= "Roll Of Thunder Hear My Cry"; 
  return favoriteBook;
};

// Variables 4
Exer.variables4 = function ( n ) {

  return n;

};

// Variables 5
Exer.variables5 = function ( n ) {

   var q=n; 
   return q; 



};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  var apples = 3; 

  // Stacy gives you more apples
  

  return apples + stacys;

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

 change = change + .25;

  // Then you spend a dime on old fashioned candy.
  change = change  - .10; 

  change = "$" + change; 

  return change;  

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
 //Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( hope, two ) {
  var faith = 2;
  var love = two+2;
  hope += "2";
  var trust = faith + love + hope + two;
  return trust;
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
  return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  setPowerLevel(9050);
  cornTortilla("chicken", "queso", "bacon", "lime");
  recombobulate()

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  var x = 36;
  console.log ("the value of x is", x);

};

// Console 2
Exer.console2 = function ( printme ) {

  console.log(printme);

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  console.log('The magic word is "'+ data+'"');


};

// Console 4
Exer.console4 = function () {

  console.log(36, 40);

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

   console.log(x);
   return y + 1; 
};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  console.log(magicFunc());

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  return magicFunc();

};

// Return 3
Exer.return3 = function () {

  var result=(strShift("abczABCZ"));
  console.log(result);

  return result +"123";

};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {

  console.log(magicFunc()+""+magicFunc());

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  var once=strShift("abcABC123!@#");

  var tug=strShift(strShift("a S d F j K l"));

  return strShuffle(once,tug);

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {
return prompt("What is the answer to the meaning of life, the universe, and everything?");

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

return confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!")
};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  var theNumber = Number(prompt("Pick a number",""));

 console.log(theNumber);

};

// Control 2
Exer.control2 = function ( bar ) {

  var foo;

  foo = "freedom"; 

  console.log(foo);

  bar + foo + bar; 
  var ding;
  ding= bar + foo + bar;

  var quux = confirm(strReverse(ding));

  return (!quux);

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );
if (!isSerious) {
  console.log("On second thoughts, let's not go to Camelot. It is a silly place.")
};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  if (temperature >=70)
    console.log("Hermit crab warning!");
  else
    console.log("Catch of the day: influenza, $14/lb.");
 
  console.log("Thanks for visiting Pier One and Three Quarters!");
};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  var luckyNumber = 7;

  if (whatDay.length <=6)
   luckyNumber= luckyNumber+"!";

  if (whatDay=="Mannersday")
    luckyNumber=luckyNumber + 4;
  else if (whatDay=="Foosday")
    luckyNumber=luckyNumber + 2;
  else if (whatDay=="Heyday")
    luckyNumber= luckyNumber+ luckyNumber.charAt(0);
  else {
    luckyNumber=Infinity; 
  }
  return luckyNumber;
};

// Conditional 4
Exer.condition4 = function () {

  var q = prompt("Enter today's date, please."); 

  if (q === null || isNaN(q) )
    console.log("What do you think this is, bub? Wonderland?");
  else if (q < 1)
      console.log("Negativelaaaaaaand~!");
  else if (q>31)
      console.log("Are they paying you overtime for this?");
   else if (29 <=q && q <=31)
      console.log("I sure hope it isn't February.");
     else console.log("Did you know? There are exactly "+q+" ways to make today awesome!");
     


};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {
  var sheep = 10;
  while (sheep >= 1) { 
    console.log(sheep+ " sheep");
    sheep=sheep-1;
  }
};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
var deadWitch = "I'm melting!";
console.log(deadWitch);
deadWitch = deadWitch.substr(2);
console.log(deadWitch); 
deadWitch = deadWitch.substr(2);
console.log(deadWitch);
deadWitch=deadWitch.substr(2);
console.log(deadWitch);
deadWitch=deadWitch.substr(2);
console.log(deadWitch);
deadWitch=deadWitch.substr(2);
console.log(deadWitch);
deadWitch=deadWitch.substr(2);
console.log("What a world!");
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
  var number = 0;
  do {
   console.log(number%3); 
   number=number + 1;  
  }while(number<6);
};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  var trainNum = 1;
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
  
};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery"; 
  var lastName = "Moneypenny"; 
  if(firstName === "Zachery") {
    lastName = "Johnson";
  }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny"; 
    var lastName = "Moneywhistle"; 
    if(firstName === "Penny") { 
        lastName = "Johnson";
    }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {

  var scream;
  scream= "...";
  console.log(scream);
  scream= "    " + scream;
  scream+= "AA";
  console.log(scream);
  scream="    " + scream;
  scream +="AA";
  console.log(scream);
  scream="    " + scream;
  scream+="AA";
  console.log(scream);
  scream="    " + scream;
  scream +="AA";
  console.log(scream);
  scream= "    " + scream;
  scream +="AA";
  scream+="H!";
  console.log(scream);

};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {

  for (var counter2=1; counter2<3; ++counter2) {
    console.log("Hi!");
    var Shady="My name is";
    for (var Slim=2; Slim<5; ++Slim) {
      console.log(Shady);
    }
    console.log("Slim Shady");
  }

};
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  for (var counter0=20; counter0>=5; --counter0) {
    if (counter0%2==0) {
      console.log(counter0,"even");
    }else {
      console.log(counter0, "odd");
    }
  }

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.current() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quadruple kiwis.

  // Reduce kiwis by 2.

  // Halve kiwis.

  // Concatenate " handsomely hirsute kiwis" to kiwis.

  // Return kiwis.

  kiwis*=4;
  kiwis-=2;
  kiwis/=2;
  kiwis +=" handsomely hirsute kiwis";

  return kiwis;

};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }


};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

    // "cow": "foo"

    // "sheep": "bar"

    // "duck": "quux"

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"


  switch (animal) {
    case "cow":
    output+="foo";
    break;
    case "sheep":
    output+="bar";
    break;
    case "duck":
    output+="quux";
    break;
    default:
    output+="ring-a-ding-ding-dingding-ding-a-ding-ding"; 
  }
  output += '"!';
  console.log( output );


};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; I < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
     // missiles.launch();
    } else {
      cower();
    }
    //wheat is not real anymore.
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2);// Zephaniah was considered a gangster because he gave haven to bandits!
    }
  }

};

Exer.comments2 = function () {

  /*
   ***  ***
      *
  **********
  */
}
};
