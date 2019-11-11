function check_string(short_string) {
  var short_url = {
      url: short_string
  };
  console.log(short_url);
  $.ajax({
        type: "POST",
        data: JSON.stringify(short_url),
        url: "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/get-website",
        contentType: "application/json",
      success: function(result) {
        alert(result.data);
      },
      error: function(result) {
        alert(result.data);
      }
    });
}
function check_url() {
    url=window.location.href;
    string_split=url.split("/")
    short_string=string_split[string_split.length-1];
    alert(short_string);
    check_string(short_string);
}
window.onload = check_url;
