function exercise1(){
  var yourNumber = parseInt(prompt("Pick a number from 1 to 100"));
  for (var i = 0; yourNumber > 0; yourNumber--) {
    i += yourNumber;
  }
  console.log(i);
  document.getElementById("answer1").innerHTML = i;
}


function exercise2() {
	
	var fullString = "";
	do {
		
		var yourString = prompt("Enter a word.");
		fullString += ` ${yourString}`;
	}
	
	while (confirm("Do you want to play a game?"))
	console.log(fullString);
	document.getElementById("answer2").innerHTML = fullString;

	
}

function exercise3() {
	var yourName = prompt("What is your name?");
	while (confirm("Would you like to print your name?")) {
		console.log(yourName);
		document.getElementById("answer3").innerHTML = yourName;
		yourName += "!";
		

	}
}

function exercise4() {	
	var mealType = "breakfast";
	var meal = "eggs and toast";
	var timeOfDay = prompt("What time of day is it: morning, noon, or evening?").toLowerCase();
	
	if (timeOfDay != "morning") {
		if (timeOfDay == "noon") {
			mealType = "lunch";
			meal = "a salad";
	
		} else
		if (timeOfDay == "evening") {
			mealType = "dinner";
			meal = "chicken and rice";
		}
		else {
			timeOfDay = "difficult to understand the time you stated";
			mealType = "a snack";
			meal = "fruit";
	
		}

	}

	
	
	console.log(`Since it is ${timeOfDay}, you should be eating ${mealType}. We suggest ${meal}. `);
	
	
    document.getElementById("answer4").innerHTML = `Since it is ${timeOfDay}, you should be eating ${mealType}. We suggest ${meal}. `;
}




