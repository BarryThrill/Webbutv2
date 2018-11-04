//Barry Al-Jawari AE2699

"use strict";

//Uppgift 1
document.querySelector("#success").addEventListener("click", function () {
    this.className = "success"
}, false);

document.querySelector("#error").addEventListener("click", function () {
    this.className = "error"
}, false);

document.querySelector("#info").addEventListener("click", function () {
    this.className = "info"
}, false);

//Uppgift 2
document.querySelector("#add-item").addEventListener("click", function () {
    var text = document.createTextNode(prompt());
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.querySelector("#items").appendChild(newItem);
}, false);

//Uppgift 3
document.querySelector("#remove-item").addEventListener("click", function () {
    var lastItem = document.querySelector("#items").lastElementChild;
    document.querySelector("#items").removeChild(lastItem);
}, false);

//Uppgift 4
var buttons = document.getElementsByClassName("remove-list-item");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (confirm("Ta bort?")) {
            this.parentNode.remove();
            this.remove();
        };
    });
}

//Uppgift 5
document.getElementById("apply-for-pet").onsubmit = function() {
    event.preventDefault();
    console.log(this.elements.firstname.value);
    console.log(this.elements.lastname.value);
    console.log(this.elements.age.value);
    console.log(this.elements.email.value);
    console.log(this.elements.pet.value);
    
    if(this.elements.firstname.value.length <= 0 || this.elements.firstname.value.length > 50 ) {
        alert("Du fyllde inte i förnamn korrekt!");
    }
    else if(this.elements.lastname.value.length <= 0 || this.elements.lastname.value.length > 50) {
        alert("Du fyllde inte i efternamn korrekt!");
    }
    else if(this.elements.age.value == ""  || parseInt(this.elements.age.value) <= 0) {
        alert("Du fyllde inte i ålder korrekt!");
    }
    else if(this.elements.email.value.length <= 0 || this.elements.email.value.length > 50) {
        alert("Du fyllde inte i email korrekt!");
    }
    else if(this.elements.pet.value == "") {
        alert("Du valde inte ett djur!");
    }
    else {
        event.target.submit();
        alert("Skickat!");
    }
}