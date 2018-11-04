  'use strict';
/* Barry Al-Jawari AE2699 */
console.log("Barry Al-Jawari AE2699");
/**
 * Uppgift 1
 * =========
 */


function max(a, b) {

    if (a > b) {
        console.log("Biggest: " + a);
        return a;
        
    } else {
       console.log("Biggest: " + b);
        return b;
    }
}

function min(a, b) {
    if (a > b) {
        console.log("Lowest: " + b);
        return b;
        
    } else {
       console.log("Lowest: " + a);
        return a;
    }
}


max(5, 10);
max(7, 7); 
min(12, 24); 
min(30, 18); 

/** 
* Uppgift 2
* =========
*/

function range(a){
    var x = [];
    for(var i = 0; i < a ; i++){
        x.push(i);  
    }
       return x; 
    } 


var testArray = range(10);
console.log(testArray);

/** 
* Uppgift 3
* =========
*/

function sum(a){
var x = 0;
    for(var i = 0; i < a.length ; i++){
     x += a[i];
   } 
    return x;
}


var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);

/** 
* Uppgift 4
* =========
*/
function countCharacter(a, b){
    var x = 0;
    for(var i = 0; i < a.length ; i++){
     if( a.charAt(i) == b) {
           x++;
     }
   } 
    return x;
}


var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log(countCharacter(testString1, "e")); 
console.log(countCharacter(testString2, "a"));

/** 
* Uppgift 5
* =========
*/

function palindrome(a) {
    return a == a.split('').reverse().join(''); 
    //Split sepererar string till en array
    //Reverse vänder på elementen i arrayen
    //Join gör array till en string och returerar stringen. 
}

console.log(palindrome("sirap - paris")); // skickar tillbaka "true"
console.log(palindrome("lorem ipsum"));

/** 
* Uppgift 6 + 7
* =========
*/

function printPerson(a) {
    return "Firstname:" + person.firstName + " Lastname:" + person.lastName + " Age:" + person.age + " Family:" + person.family;
    }


var person = {firstName:"Barry", lastName:"Baller", age:21, family:"Lebron James"};
console.log(printPerson(person));

/** 
* Uppgift 8
* =========
*/

function createBox(height, width){
    
        return { 
        height: height, width: width
        }
}
        
var box = createBox(15, 20);

console.log(box.height); 
console.log(box.width);

/** 
* Uppgift 9
* =========
*/

function Triangle(height, width) {
    return { 
        height: height, width: width, area : (height*width) / 2 
        }
}


var tri = Triangle(12, 14);
console.log(tri.height); 
console.log(tri.width); 
console.log(tri.area);
/** 
* Uppgift 10
* =========
*/

function attributes(a) {
   return Object.keys(a).join(', ');  //Object.keys returnerar en array med en viss objekt. I samma ordning som i en for loop.
   //Join gör array till en string och returerar stringen. 

}

var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2); // skickar tillbaka ["a", "b", "c"]


