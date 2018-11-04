/* Barry Al-Jawari AE2699 */
document.writeln("Barry Al-Jawari AE2699");
document.write("\n");
document.write("---------------------------" + "\n");
/**
 * Uppgift 1
 * =========
 */
document.writeln("	Uppgift 1");
document.writeln( 5 * 2 < 12 );
document.writeln( 55 > 22 );
document.writeln( 16 / 4 == 4 );
document.writeln( 8 + 2 <= 128 );
document.writeln( 32 * 8 !=  255);
document.write("---------------------------" + "\n");

/**
 * Uppgift 2
 * =========
 */
document.writeln("	Uppsgift 2");
document.write("\n");
var tis = "Tisdag"
var burg = "Hamburgare"
var back = "I'll be back"

document.writeln(tis.substring(0,3));
document.writeln(burg.substring(3));
document.writeln(back.substring(5));
document.write("---------------------------" + "\n");

/**
 * Uppgift 3
 * =========
 */
 
 document.writeln("	Uppsgift 3");
 document.write("\n");
 
var learn = "It's Learning"
var parts = "JavaScript: The Good Parts"

document.writeln(learn.substring(5).toUpperCase())
document.writeln(parts.substring(16).toLowerCase())
document.write("---------------------------" + "\n");
 
 /**
 * Uppgift 4
 * =========
 */
  document.writeln("	Uppsgift 4");
  document.write("\n");
  
var sumOfNumbers = 0;
var numbers = [128, 256, 512, 1024, 2048, 3968];
for(var i = 0; i < numbers.length; i++) {
sumOfNumbers += numbers[i];
}

var avgNumber = sumOfNumbers/numbers.length;
document.writeln("Totala summan: " + sumOfNumbers);
document.writeln("Average: " + avgNumber);
document.write("---------------------------" + "\n");
 
 /**
 * Uppgift 5
 * =========
 */
	document.writeln("	Uppsgift 5");
	document.write("\n");
var sum = 0;
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
for(var i = 0; i < countries.length; i++) { 
for(var j = 0; j < countries[i].length; j++){
sum++;
}
}
var Avg = sum/countries.length
var threeFirst= countries[1].substring(0,3);

document.writeln(threeFirst);
document.writeln("avg: " + Avg);
document.write("---------------------------" + "\n");
 
 /**
 * Uppgift 6
 * =========
 */
	document.writeln("	Uppsgift 6");
	document.write("\n");
 var values = [3, 5, "Jane", true, 144, false];
document.writeln(values.reverse());
document.write("---------------------------" + "\n");

 /**
 * Uppgift 7
 * =========
 */
	document.writeln("	Uppsgift 7");
	document.write("\n");
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays =[];

multipleArrays = multipleArrays.concat(names,ages,hasPet);
document.writeln(multipleArrays);

document.write("---------------------------" + "\n");
 
 /**
 * Uppgift 8
 * =========
 */
 document.writeln("	Uppsgift 8");
 document.write("\n");
var actors = ["Sherlock", "Watson", "Bo"];
var str = actors.join(" - ");
document.writeln(str);
document.write("---------------------------" + "\n");

 
 /**
 * Uppgift 9
 * =========
 */
  document.writeln("	Uppsgift 9");
 document.write("\n");
 var amount = Math.floor(Math.random() * ((75-35)+1) + 35);

if(amount < 50) {
 write = "Less then 50!";
}
else if(amount > 50 && amount < 65){
write = "Optimal range for the amount!";
}
else {
write = "Too much!";
}

document.writeln(write);
document.writeln("Amount: " + amount); /* För att veta vilken random siffra som är angiven */
 
document.write("---------------------------" + "\n");
 
 /**
 * Uppgift 10
 * =========
 */
 document.writeln("	Uppsgift 10");
document.write("\n");
var numbers = "";
var size = 8; /* Ange vilken storlek som helst på pyramiden */ 
for(var i=1; i<=size; i++)
{
  numbers = numbers + "#"
  document.writeln(numbers );
}
document.write("---------------------------" + "\n");