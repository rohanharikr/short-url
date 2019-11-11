// $(function() {
//
// });
// 
// $("#shorter_url").click(function(eve) {
//
// });

$("#shorter_url").click(function(){
  var shortlink = {
      website_url: $("#hmm").val()
  };
  console.log(shortlink);
  $.ajax({
      type: "POST",
      data: JSON.stringify(shortlink),
      url: "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/url-shortner",
      contentType: "application/json"
  });
});
