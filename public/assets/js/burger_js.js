

$("#submit").on("click", function (e) {
    e.preventDefault();

    $.post("/api/burgers", { burger_name: $("#burger_name").val() }).done(function (data) {
        location.reload();
    })
})