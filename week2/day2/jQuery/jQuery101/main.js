const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
    return document.getElementById(elementId)
        }
    }
    console.log(myQuery("#yourElementID"))

const sayHi = function(){
  console.log("Hi!")
}

const $ = sayHi

$() //prints "Hi!"

$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$("#brown-div").css("background-color", "brown")


$('#btn').click(alert('hi'))
