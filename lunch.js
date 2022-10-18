document.addEventListener('DOMContentLoaded', function() {
    
});

class cuisine {
    constructor (name, spicy, familiar, nonAmerican, cheap, quick, nonAnimal, filling) {
        this.name = name;
        this.spicy = spicy;
        this.familiar = familiar;
        this.nonAmerican = nonAmerican;
        this.cheap = cheap;
        this.quick = quick;
        this.nonAnimal = nonAnimal;
        this.filling = filling;
    }
}

var options = [
    //Generic
    new cuisine (
        "Coffee And Donuts", false, true, false, false, true, false, false
    ),
    new cuisine (
        "Tea And Pasteries", false, true, false, false, true, true, false
    ),
    new cuisine (
        "Sandwiches And Subs", false, true, false, true, true, true, false
    ),
    new cuisine (
        "Salads", false, false, false, true, true, true, false
    ),
    new cuisine (
        "Steak", false, true, false, false, false, false, true
    ),
    new cuisine (
        "Seafood", false, true, false, false, true, false, false
    ),
    //American
    new cuisine (
        "Brunch", false, true, false, false, false, false, true
    ),
    new cuisine (
        "Burgers And Fries", false, true, false, true, true, false, true
    ),
    new cuisine (
        "Hot Dogs", false, true, false, true, true, false, true
    ),
    new cuisine (
        "Fried Chicken", true, true, false, true, true, false, true
    ),
    new cuisine (
        "Shakes And Ice Cream", false, true, false, true, true, false, false
    ),
    new cuisine (
        "Tacos", true, true, true, true, true, false, true
    ),
    new cuisine (
        "Burritos", true, true, true, true, true, true, true
    ),
    new cuisine (
        "Fajitas", true, true, true, true, true, false, true
    ),
    //Carribbean
    new cuisine (
        "Gyro", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Jerk", true, true, true, false, false, false, true
    ),
    // European
    new cuisine (
        "Fish And Chips", false, true, true, true, true, false, true
    ),
    new cuisine (
        "Pasta", true, true, true, true, false, true, true
    ),
    new cuisine (
        "Pizza", false, true, true, true, true, true, true
    ),
    //Asian
    new cuisine (
        "Curry", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Shawarma", true, false, true, true, true, true, true
    ),
    new cuisine (
        "Chinese Takeout", true, true, true, true, true, false, false
    ),
    new cuisine (
        "Sushi", true, false, true, false, true, false, false
    ),
    new cuisine (
        "Ramen", true, false, true, false, true, false, true
    ),
    new cuisine (
        "Hibachi", true, false, true, false, false, false, true
    ),
]

var myOptions = []

var option = "";

function filter () {
    document.getElementById('result').style.display = "block";

    myOptions = fillOptions();

    var spicy = parseInt(document.getElementById('spicy').getAttribute('value'));
    var familiar = parseInt(document.getElementById('familiar').getAttribute('value'));
    var nonAmerican = parseInt(document.getElementById('nonAmerican').getAttribute('value'));
    var cheap = parseInt(document.getElementById('cheap').getAttribute('value'));
    var quick = parseInt(document.getElementById('quick').getAttribute('value'));
    var nonAnimal = parseInt(document.getElementById('nonAnimal').getAttribute('value'));
    var filling = parseInt(document.getElementById('filling').getAttribute('value'));

    filterSpicy(spicy);
    filterFamiliar(familiar);
    filterNonAmerican(nonAmerican);
    filterCheap(cheap);
    filterQuick(quick);
    filterNonAnimal(nonAnimal);
    filterFilling(filling);

    num = Math.floor(Math.random() * myOptions.length);

    if (myOptions.length > 0) {
        document.getElementById('output').innerHTML = `Find ` + myOptions[num].name + ` Near Me`;
        option = myOptions[num].name;
    } else {
        document.getElementById('output').innerHTML = `Find Water Near Me`;
        option = "Water";
    }
}

function fillOptions() {
    var arr = [];

    for (var i = 0; i < options.length; i++) {
        if (options[i].name != option) {
            arr.push(options[i]);
        }
    }

    return arr;
}

function filterSpicy(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].spicy == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }  
}

function filterFamiliar(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].familiar == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterNonAmerican(filter)
{
    if (filter == true)
    {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].nonAmerican == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterCheap(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].cheap == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterQuick(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].quick == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterNonAnimal(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].nonAnimal == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function filterFilling(filter)
{
    if (filter == true) {
        for (var i = 0; i < myOptions.length; i++) {
            if (myOptions[i].filling == false) {
                myOptions.splice(i, 1);
                i--;
            }
        }
    }
}

function logFood() {
    for (var i = 0; i < myOptions.length; i++) {
        console.log(myOptions[i].name);
    }
}

function toggle(id) {
    var element = document.getElementById(id);

    if (element.getAttribute('value') == 0) {
        element.setAttribute('value', 1);
        element.setAttribute('class', 'lunch-choice-on');
    } else {
        element.setAttribute('value', 0);
        element.setAttribute('class', 'lunch-choice-off');
    }
}

function find () {
    open("https://www.google.com/search?q=Find+" + option + "+Restaurant+Near+Me");
}