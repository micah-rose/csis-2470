$(document).ready(function() {
  // message change
  var words = [
    "sage residential and commercial buildings",
    "interact with spirits",
    "perform exorcisms",
    "close unsolved paranormal cases",
    "bring you peace of mind"
  ];
  count = 0;
  setInterval(function() {
    if (count === 4) {
      count = 0;
    } else {
      count++;
    }
    $("#message-change").fadeOut(1500, function() {
      $("#message-change")
        .fadeIn(1500)
        .html(words[count]);
    });
  }, 5000);

  $("#accordion").accordion({
    icons: {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    }
  });

  var images = ["about2.jpg", "about3.jpg", "about4.jpg"];
  var i = 0;
  setInterval(function() {
    if (i === 2) {
      i = 0;
    } else {
      i++;
    }
    $("#about-image-change").fadeOut(1500, function() {
      $("#about-image-change")
        .fadeIn(1500)
        .attr("src", "images/" + images[i]);
    });
  }, 5000);
});
