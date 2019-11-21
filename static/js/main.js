var tabId;

$("#shorter_url").click(function kaiju(){
  var shortlink = {
      website_url: $("#hmm").val()
  };
  $.ajax({
      type: "POST",
      dataType: "json",
      data: JSON.stringify(shortlink),
      url: "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/url-shortner",
      contentType: "application/json",
      success: function(result) {
        // console.log(result);
        var statreq = result.shortened_url;
        tabId = statreq.split("/").pop();

        $('#short_url').html(result.shortened_url)
        $('#short_url').removeClass("default");
        $('#short_url').addClass("new");
        $('#actone').removeClass("actone");
        $('#actone').addClass("actonee");
        $('#acttwo').removeClass("acttwoo");
        $('#acttwo').addClass("acttwoo");
        $('#pt').removeClass("parakkumthalika");
        $('#pt').addClass("parakkumthalikasmall");

      },
      error: function(result) {
        alert(result.data);
      }
    });
  });

  $("#acttwo").click(function(){
    var forstats = {
      url: tabId
    };
    // console.log(forstats);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: JSON.stringify(forstats),
        url: "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/get-url-stats",
        contentType: "application/json",
        success: function(result) {
        var r = result.website_stats.website_stats.user_count;
        console.log (r);
        alert("Your link has " + r +" hits!");
        },
        error: function(result) {
          alert(result.data);
        }
      });
    });
