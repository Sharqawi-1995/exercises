$("#plague").hover(function(){
  $("#plague").remove()
})


$("button").on("click", function(){
  $("#blogs").append("<div class='blog'>Cool blog</div>")
})

$("#blogs").on("click", ".blog", function(){
  $(".blog").text("blargh") 
})
