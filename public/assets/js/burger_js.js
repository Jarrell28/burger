

$("#submit").on("click", function (e) {
    e.preventDefault();

    $.post("/api/burgers", { burger_name: $("#burger_name").val() }).done(function (data) {
        location.reload();
    })
})

$(".remove").on("click", function (e) {
    var id = $(this).attr("data-id");


    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: id
    }).done(function (data) {
        location.reload();
    })

})