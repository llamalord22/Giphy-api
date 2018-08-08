
var games = ["Zelda", "Super Mario", "Sonic the Hedgehog", "Warcraft", "Street Fighter", "League of Legends", "Mortal Combat"];
var gameGif;

function searchGame() {
    var game = $(this).attr("data-game");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=rI1IycXL1PKjHBOLNDpExvjGMTfQABIr&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gameDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gameImage = $("<img>");

            gameImage.attr("src", results[i].images.fixed_height.url);
            

            gameDiv.append(p);
            gameDiv.append(gameImage);
            $("#game-gifs").prepend(gameDiv);
            
        }


    });

}

function renderButtons() {
    $("#gif-buttons").empty();

    for (var i = 0; i < games.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-game", games[i]);
        a.text(games[i]);
        a.on("click", searchGame);
        $("#gif-buttons").append(a);
    }
}

$("#add-game").on("click", function (event) {
    event.preventDefault();
    var game = $("#game-input").val().trim();
    games.push(game);
    renderButtons();
    
    

});


renderButtons();

