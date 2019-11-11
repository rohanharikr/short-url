$(function() {
    var shortlink = {
        website_url: "safsdafsdf"
    };
    $.ajax({
        type: "POST",
        data: JSON.stringify(shortlink),
        url: "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/url-shortner",
        contentType: "application/json"
    });
});
