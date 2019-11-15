


$( document ).ready(function() {
    $("#submitButton").on("click", function(){
        let userInput = $("#inputField").val()
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=fed4bfc9fcef4c8b786e332a5b1ff405`,
            method: "GET"
        
            }).then(function (response) {
                console.log(response)

                $("#city").text(response.name);
                // $("date").text(response.coord.dt);
                // $("#icon").html(response.weather[0].icon);
                $("#temp").text("Temperature: " + response.main.temp);
                $("#humid").text("Humidity: " + response.main.humidity);
                $("#wind").text("Wind Speed: " + response.wind.speed);

        });

    })

});

