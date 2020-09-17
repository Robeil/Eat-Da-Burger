const { updateBurger } = require("../../../config/orm");

$(function() {
    $("#addBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        // post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( function() {
            console.log("new burger created!");
            location.reload();
        })
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("burgerId");

        var updateBurger = {
            devoured: true
        };

        //put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateBurger
        }).then(function() {
            console.log(`Burger ${id} devoured.`);
            location.reload();
        })
    });

});