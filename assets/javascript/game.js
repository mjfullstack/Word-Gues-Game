
// <script type="text/javascript">

var randDwarfName = "";
function snowWhite() {


    // VARS
    // =====================================
    var name = "Snow White";
    var dwarfName = ["Sleepy", "Sneezy", "Grumpy", "Happy", "Doc", "Bashful", "Dopey"];
    var dwarfCount = dwarfName.length;
    var isSleeping = true;
    var activity = ["walk", "run", "stroll", "swim", "RV trip", "water-slide adventure", "joy ride in a Humvee"];
    // Add Songs
    // Heigh Ho



    // Characters
    // evil step mother


    // Phrases


    // mirror mirror on the wall, who's the fariest of them all?

    // Trivia
    // First Disney full-length animated release, 1937 in LA, Feb 1938 nationally
    // Critics called it Walt disney's Folly  because they thought it would fail.



    // Maybe go Disney vs just snow white


    var actCount = 7;
    var i;
    var ii = 0;
    var printAllDwarfs = "y"; // prompt("Do you want to see what the dwarfs are doing? (y / n)");

    // var dwarfChoice = dwarfName[Math.floor(Math.random() * dwarfName.length)];
    var dwarfNum = [];
    var dwarfsFound = 0; // Count of ints found for randomization of DWARFS
    var actNum = []; // Separate random number for randomizing the activity, too
    var actsFound = 0; // Count of ints found for randomization of ACTIVITIES
    var randNum;  // Used for both randomizaions

    // FUNCTIONS
    // =====================================
    function debug_print(ii) {
        console.log ("i = " + i + ", ii = " + ii + ", dwarfNum[ii] = ", dwarfNum[ii]);
        console.log ("randNum = ", randNum);
        console.log ("dwarfName[dwarfNum[ii]] = ", dwarfName[dwarfNum[ii]]);
        console.log ("dwarfNum.length = ", dwarfNum.length);
        console.log ("dwarfsFound = ", dwarfsFound);
        console.log ("found = ", found);
        console.log ("Array dwarfName = " + dwarfName);
        console.log ("Array dwarfNum = " + dwarfNum);
        console.log ("Array activity = " + activity);
        console.log ("activity[actNum[i]] = " + activity[actNum[i]]);
        console.log ("-----------------------------------");
    };



    // FOR RANDOMIZING the DWARFS...
    // Set up first random num outside while loop, then enter loop
    // Pick a random number, but only keep it if it is NOT one already selected.
    randNum = Math.floor(Math.random() * dwarfName.length);
    dwarfNum.push(randNum);
    dwarfsFound++;
    // debug_print(0);
    while (dwarfsFound < dwarfCount) {
        randNum = Math.floor(Math.random() * dwarfName.length);
        var found = false;
        for (i=0; i< dwarfNum.length; i++) {
            if (randNum === dwarfNum[i] )
                found = true;
        }
        if (!found) {
            dwarfNum.push(randNum);
            dwarfsFound++;
        }
        // debug_print(dwarfsFound);
         
    };

    // FOR RANDOMIZING the ACTIVITIES...
    // Set up first random num outside while loop, then enter loop
    // Pick a random number, but only keep it if it is NOT one already selected.
    randNum = Math.floor(Math.random() * activity.length);
    actNum.push(randNum);
    actsFound++;
    // debug_print(0);
    while (actsFound < actCount) {
        randNum = Math.floor(Math.random() * activity.length);
        var found = false;
        for (i=0; i< activity.length; i++) {
            if (randNum === actNum[i] )
                found = true;
        }
        if (!found) {
            actNum.push(randNum);
            actsFound++;
        }
        // debug_print(actsFound);

    };

    // Select a random dwarf for the hanging!
    console.log("actNum = " + actNum);
    console.log("dwarfNum = " + dwarfNum);
    console.log("actNum[3] = " + actNum[3]);
    console.log("dwarfNum[actNum[3]] = " + dwarfNum[actNum[3]]);
    randDwarfName = dwarfName[dwarfNum[actNum[3]]];
    console.log(dwarfName[dwarfNum[actNum[3]]]);
    console.log(randDwarfName);
        
    // Hype the experience!
    if (printAllDwarfs.toLowerCase() === "y") {
        document.getElementById("number").innerHTML = "<h1>We're gonna have some fun!!!</h1>"; /* 5+6*/
    } else {
        document.getElementById("number").innerHTML = "Sorry you don't want to continue.";  /* 6-5 */
    }

    // Generate Snow White's schedule for this week!
    if (printAllDwarfs === "y") {
        var htmlTable = "<table style='width:80%'> <h1><tr><th>Snow White's Dwarf Enrichment Activities Week of Aug. 19, 2018!</th></th><h1>";
        for (i = 0; i < dwarfNum.length; i++) {
            htmlTable += "<h2><tr><td>" + name + " and " + dwarfName[dwarfNum[i]] + " went for a " + activity[actNum[i]] + ".</td></tr></h2>";//try table row instead
        };
        htmlTable += "</table>";
        document.getElementById("table").innerHTML = htmlTable;
    } else {
        document.getElementById("nextTime").innerHTML = "Sorry you didn't want to continue.";
    };
    document.getElementById("goodBye").innerHTML = "<h1>Game Over!</h1>";
};

// Hang Dwarf Script 

    // Print Letter Received
    function myDisplayLetter (letter) {
        var myHtmlLetter = letter;
        var myDontLike = "";
        document.getElementById("hangLetter").innerHTML =  myHtmlLetter + "  I LIKE this Character!!!";
        document.getElementById("hangWrong").innerHTML =  myDontLike;
    };
    // Print WRONG CHARACTER received!
    function myDontLike (letter) {
        var myDontLike = letter;
        var myHtmlLetter = "";
        document.getElementById("hangWrong").innerHTML =  myDontLike + "  I Don't Like this Character";
        document.getElementById("hangLetter").innerHTML =  myHtmlLetter;
    };


    // Test for letters (only good up to char 127)
    // This retruns true for A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    // a b c d e f g h i j k l m n o p q r s t u v w x y z
    function isAlpha(aChar) {
        myCharCode = aChar.charCodeAt(0);
        console.log ("Char = " + aChar + "; Code = " + myCharCode)
        if (((myCharCode > 64) && (myCharCode < 91)) ||
            ((myCharCode > 96) && (myCharCode < 123))) {
            return true;
        }

        return false;
    }


    // Start of the hangman game...
    function myHangmanOut() {
        var word2guess = {          // OBJECT
            word : [],
            show : [],
        };

        // Get random dwarf from the two random numbers arrays for dwarfs and activities above
        word2guess.word = randDwarfName.split;
        console.log(word2guess.word); 
        
        // Initialize all letters to NOT show
        for (var j=0; j<word2guess.word.length; j++ ) {
            word2guess.show[j] = false;
        };
        // console.log(word2guess.show);
        // word2guess.show[1] = true;
        // word2guess.show[2] = true;
        // console.log(word2guess.show);

        var html2show = "<h2> ";
        var i;


        for (i=0; i < word2guess.word.length; i++) {
            if (word2guess.show[i]) {
                html2show += word2guess.word[i];
                // html2show += "Can you hear me now";
                console.log(html2show);
                console.log(word2guess.show[i]);
            } else {
                html2show += "_";
                // html2show += "Can you see me now";
                console.log(html2show);
                console.log(word2guess.word.length);
                console.log(word2guess.show[i]);

            };
            html2show += " ";
            if (i === word2guess.word.length-1) {
                html2show += "</h2>";
            };
        };

        document.getElementById("hang").innerHTML =  html2show;

        // Get User Input...
        document.onkeyup = function (event) {

            var actionLetter = event.key;
            actionLetter = actionLetter.toLowerCase();
            // var validLetter = false;
            var validLetter = isAlpha(actionLetter);


            if (validLetter) {
                myDisplayLetter(actionLetter);
            } else {
                myDontLike(actionLetter);
            };
        };
    };


    // Printing Test
    function myFunction() {
        var city = 'New York ' + 5 +' City';
        var htmlOut = " ";
        var i;
        for (i=0;i<city.length;i++) {
            console.log(city[i] + "   is a    " + typeof(city[i]) + "  myNaN = " + Number.isNaN(city[i]));
            htmlOut +=  " _ " + city[i];
            document.getElementById("demo").innerHTML =  htmlOut;
        };
    };
    
// };

