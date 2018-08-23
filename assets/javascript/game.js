
    // FUNCTIONS
    // =====================================
    // Debugging Code
    debugPrint = function(ii) {
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



// <script type="text/javascript">

var snowWhite = {
    
    // VARS
    // =====================================
    randDwarfName: "",
    name: "Snow White",
    dwarfName: ["Sleepy", "Sneezy", "Grumpy", "Happy", "Doc", "Bashful", "Dopey"],
    // dwarfCount : function() { return this.dwarfName.length; },
    isSleeping: true,
    activity: ["walk", "run", "stroll", "swim", "RV trip", "water-slide adventure", "joy ride in a Humvee"],

    actCount: 7,
    i : 0,
    ii: 0,
    printAllDwarfs: "y", // prompt("Do you want to see what the dwarfs are doing? (y / n)");

    dwarfNum: [],
    dwarfsFound: 0, // Count of ints found for randomization of DWARFS
    actNum: [], // Separate random number for randomizing the activity, too
    actsFound: 0, // Count of ints found for randomization of ACTIVITIES
    randNum : 0,  // Used for both randomizaions

    

    // FUNCTIONS
    // =====================================
    // Debugging Code
    // debugPrint: function(ii) {
    //     console.log ("i = " + i + ", ii = " + ii + ", dwarfNum[ii] = ", dwarfNum[ii]);
    //     console.log ("randNum = ", randNum);
    //     console.log ("dwarfName[dwarfNum[ii]] = ", dwarfName[dwarfNum[ii]]);
    //     console.log ("dwarfNum.length = ", dwarfNum.length);
    //     console.log ("dwarfsFound = ", dwarfsFound);
    //     console.log ("found = ", found);
    //     console.log ("Array dwarfName = " + dwarfName);
    //     console.log ("Array dwarfNum = " + dwarfNum);
    //     console.log ("Array activity = " + activity);
    //     console.log ("activity[actNum[i]] = " + activity[actNum[i]]);
    //     console.log ("-----------------------------------");
    // },


    // Initialize the Snow White Dwarf Enrichment Activities, used in hangDwarf too!
    initWords: function() {
        // FOR RANDOMIZING the DWARFS...
        // Set up first random num outside while loop, then enter loop
        // Pick a random number, but only keep it if it is NOT one already selected.
        this.randNum = Math.floor(Math.random() * this.dwarfName.length);
        this.dwarfNum.push(this.randNum);
        this.dwarfsFound++;
        // debug_print(0);
        while (this.dwarfsFound < this.dwarfName.length) {
            this.randNum = Math.floor(Math.random() * this.dwarfName.length);
            var found = false;
            for (i=0; i< this.dwarfNum.length; i++) {
                if (this.randNum === this.dwarfNum[i] )
                    found = true;
            };
            if (!found) {
                this.dwarfNum.push(this.randNum);
                this.dwarfsFound++;
            };
            // console.log("dwarfsFound = " + this.dwarfsFound);
            // debug_print(this.dwarfsFound);
        };
        // console.log("dwarfNum = " + this.dwarfNum);

        // FOR RANDOMIZING the ACTIVITIES...
        // Set up first random num outside while loop, then enter loop
        // Pick a random number, but only keep it if it is NOT one already selected.
        this.randNum = Math.floor(Math.random() * this.activity.length);
        this.actNum.push(this.randNum);
        this.actsFound++;
        // debug_print(0);
        while (this.actsFound < this.actCount) {
            this.randNum = Math.floor(Math.random() * this.activity.length);
            var found = false;
            for (i=0; i< this.activity.length; i++) {
                if (this.randNum === this.actNum[i] )
                    found = true;
            }
            if (!found) {
                this.actNum.push(this.randNum);
                this.actsFound++;
            }
            // debug_print(actsFound);
        };
        this.selRandDwarf();
        this.hypeDwarfs();
        this.printSched();
    },

    // Select a random dwarf for the hanging!
    selRandDwarf : function () {
        console.log("actNum = " + this.actNum);
        console.log("dwarfNum = " + this.dwarfNum);
        console.log("actNum[3] = " + this.actNum[3]);
        console.log("dwarfNum[actNum[3]] = " + this.dwarfNum[this.actNum[3]]);
        this.randDwarfName = this.dwarfName[this.dwarfNum[this.actNum[3]]];
        console.log(this.dwarfName[this.dwarfNum[this.actNum[3]]]);
        console.log(this.randDwarfName);
    },

    hypeDwarfs : function() {
        // Hype the experience!
        if (this.printAllDwarfs.toLowerCase() === "y") {
            document.getElementById("number").innerHTML = "<h1>We're gonna have some fun!!!</h1>"; /* 5+6*/
        } else {
            document.getElementById("number").innerHTML = "Sorry you don't want to continue.";  /* 6-5 */
        }
    },

    // Generate Snow White's schedule for this week!
    printSched : function () {
        if (this.printAllDwarfs === "y") {
            var htmlTable = "<table style='width:80%'> <h1><tr><th>Snow White's Dwarf Enrichment Activities Week of Aug. 19, 2018!</th></th><h1>";
            for (var i = 0; i < this.dwarfNum.length; i++) {
                htmlTable += "<h2><tr><td>" + this.name + " and " + this.dwarfName[this.dwarfNum[i]] + " went for a " + this.activity[this.actNum[i]] + ".</td></tr></h2>";//try table row instead
            };
            htmlTable += "</table>";
            document.getElementById("table").innerHTML = htmlTable;
        } else {
            document.getElementById("nextTime").innerHTML = "Sorry you didn't want to continue.";
        };
        document.getElementById("goodBye").innerHTML = "<h1>Game Over!</h1>";
    },



    // Functions
    // ===================================

    // Print Letter Received
    myDisplayLetter : function (letter) {
        var myHtmlLetter = letter;
        var myDontLike = "";
        document.getElementById("hangLetter").innerHTML =  myHtmlLetter + "  I LIKE this Character!!!";
        document.getElementById("hangWrong").innerHTML =  myDontLike;
    },

    // Print WRONG CHARACTER received!
    myDontLike : function (letter) {
        var myDontLike = letter;
        var myHtmlLetter = "";
        document.getElementById("hangWrong").innerHTML =  myDontLike + "  I Don't Like this Character";
        document.getElementById("hangLetter").innerHTML =  myHtmlLetter;
    },


    // Test for letters (only good up to char 127)
    // This retruns true for A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    // a b c d e f g h i j k l m n o p q r s t u v w x y z
    isAlpha : function (aChar) {
        myCharCode = aChar.charCodeAt(0);
        console.log ("Char = " + aChar + "; Code = " + myCharCode)
        if (((myCharCode > 64) && (myCharCode < 91)) ||
            ((myCharCode > 96) && (myCharCode < 123))) {
            return true;
        }

        return false;
    },

    // Display Output of the hangman game...
    dispHangmanOut : function () {
        var word2guess = {          // OBJECT
            word : [],
            show : [],
        };

        // Get random dwarf from the two random numbers arrays for dwarfs and activities above
        word2guess.word = this.randDwarfName.split;
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
                console.log(word2guess.show[i] + "Show Letter");
            } else {
                html2show += "_";
                // html2show += "Can you see me now";
                console.log(html2show);
                console.log(word2guess.word.length);
                console.log(word2guess.show[i] + "Show Underscore");

            };
            html2show += " ";
            if (i === word2guess.word.length-1) {
                html2show += "</h2>";
            };
        };

        document.getElementById("hang").innerHTML =  html2show;
    },

    // Hang Dwarf Script
    hangDwarf : function () {

        // Initial Dispaly to start getting input
        this.dispHangmanOut();

        // Get User Input...
        document.onkeyup = function (event) {

            var actionLetter = event.key;
            actionLetter = actionLetter.toLowerCase();
            // var validLetter = false;
            var validLetter = snowWhite.isAlpha(actionLetter);


            if (validLetter) {
                snowWhite.myDisplayLetter(actionLetter);
            } else {
                snowWhite.myDontLike(actionLetter);
            };
        snowWhite.dispHangmanOut();
        };
    }, // End of hangDwarf


    // Printing Test

    myFunction : function () {
        var city = 'New York ' + 5 +' City';
        var htmlOut = " ";
        var i;
        for (i=0;i<city.length;i++) {
            console.log(city[i] + "   is a    " + typeof(city[i]) + "  myNaN = " + Number.isNaN(city[i]));
            htmlOut +=  " _ " + city[i];
            document.getElementById("demo").innerHTML =  htmlOut;
        };
    }
};



    /************* ADDITIONAL and/or IMPROVEMENT IDEAS ******************
     * // Snow White Hang Dwarf Game ==> children's learning app
    // Add Songs
    // Heigh Ho



    // Characters
    // evil step mother


    // Phrases
    // mirror mirror on the wall, who's the fariest of them all?



    // Trivia
    // 1. First Disney full-length animated release, 1937 in LA, Feb 1938 nationally
    // 2. Critics called it Walt disney's Folly  because they thought it would fail.



    // Maybe go Disney vs just snow white
    // Add paragraph to read and important words to remember to hangman game
    // Number of important words in paragraph / reading
    // Count down to get all words
    // Then get next topic
    // Next topic could come from a database assigned to that child by parent / teacher /cirruicuulm 
    ************* End of ADDITIONAL and/or IMPROVEMENT IDEAS ******************/



