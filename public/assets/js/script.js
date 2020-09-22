$(function() {
    $(".addBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgers").val().trim(),
            devoured: 0
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
//putt
    $(".devourMe").on("click", function(event) {
        var id = $(this).data("burgerid");
console.log("clicked",id)
        var burgerUpdate = {
            devoured: 1
        };

        //put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data:burgerUpdate
        }).then(function() {
            console.log(`Burger ${id} devoured.`);
            location.reload();
        })
    });

});