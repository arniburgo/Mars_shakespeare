var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day) {
    return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        )
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {
    
    getRoverImage(1000).then(function (response) {
        var marsPhotos = response.photos;
        for(var i = 0; i < marsPhotos.length; i = i + 1  ){
            //heavy work
            var photo = marsPhotos[i];
            var url = photo.img_src;
            // $('.main').append("<div class='imgContainer'>");
            var $imgContainer = $("<div class='singImage'>");
            console.log($imgContainer);
            $imgContainer.append("<img class='roverImage' src='" + url + "'>"); 
            $('.main').append($imgContainer);

            getShakespeareQuote(null, 



                function (quote) {
                $(".main").append("<p class='imgQuote'>" + quote.quote + "</p>");
            }, 


            function (error) {
                console.log(error)
            });

        }
    })

});