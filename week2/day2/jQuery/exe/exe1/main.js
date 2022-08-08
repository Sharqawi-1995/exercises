$("button").on("click", function () {
    $("#human-list").append(`<li>${$("input").val()}</li>`)
    $("input").val("")
})