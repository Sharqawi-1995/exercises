const data = $("div").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)
$('button').on('click', function () {
    alert('clicked!')
  })

//   const clicked = function () {
//     alert('clicked!')
//   }
  
//   $('button').on('click', clicked)

// const clicked = function () {
//     alert('clicked!')
//   }
  
//   $('button').click(clicked)

$("#b1").hover(function () {
    $("#b1").css("background-color", "blue")
})

$("button").on("click", function () {
    alert($("#my-input").val())
})

$("#b1").hover(function () {
    console.log($(this))
})