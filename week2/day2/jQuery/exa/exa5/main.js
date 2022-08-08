const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

const text = "Banana"
const item = $("<div class=fruit>" + text + "</div>")

console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`//use template literals and $(this)
    
    $("body").append(divCopy)
  })



//   const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]
// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }




const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

  for (let name of names) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
  }


  $("p").remove(".brown")