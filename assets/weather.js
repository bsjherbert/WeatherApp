


$(document).ready(function () {
    $("#date").text(moment().format("MMM Do YY"));

    $("#submitButton").on("click", function () {
        let userInput = $("#inputField").val()
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=fed4bfc9fcef4c8b786e332a5b1ff405`,
            method: "GET"

        }).then(function (response) {
            console.log(response)

            // $("#city").text();
            // $("#icon").html();
            // $("#temp").text("Temperature: " + response.main.temp);
            // $("#humid").text("Humidity: " + response.main.humidity);
            // $("#wind").text("Wind Speed: " + response.wind.speed);

            let card = $("<div>")
            let city = $(`<p>${response.name}</p>`)
            let icon = $(`<img src="https://openweathermap.org/img/w/${response.weather[0].icon}.png">`)
            let temp = $(`<p>${response.main.temp}</p>`)
            let humid = $(`<p>${response.main.humidity}</p>`)
            let wind = $(`<p>${response.wind.speed}</p>`)

            card.append(city, icon, temp, humid, wind);
            $("#results").append(card)


        });

    })

});

