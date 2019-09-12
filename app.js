// search terms
// number of records to recieve 
// start year
// end year
// something to display top article

// importance

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + "c3ANXO9GcSYYNtV8TL2oK5Y4tDMFzboe&limit=6";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (e) {
    var search = $('#').val().trim();
    var startYear;
    var endYear;

    $(".class").text(JSON.stringify(e.keywords));

});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (e) {
    var search = $('#').val().trim();
    var startYear;
    var endYear;


    $(".class").text(JSON.stringify(e.));
    $(".class").text(JSON.stringify(e.));

});