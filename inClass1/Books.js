function getBooks(arr) {
  var things = "<section><header>List of Cool Books</header><ul>";

  for (i = 0; i < arr.length; i++) {
    things +=
      "<li><ul><li><b>" +
      arr[i].Title +
      "</b></li><li>" +
      arr[i].Author +
      "</li>";

    if (arr[i].Forsale == true) {
      things += "<li> Price: " + arr[i].Price + "</li>";
    }
    if (arr[i].Awards instanceof Array) {
      things += "<li> Awards: <ul> ";
      var awardCount = arr[i].Awards.length;
      var k = 0;
      while (k < awardCount) {
        things += "<li>" + arr[i].Awards[k] + "</li>";
        k++;
      }
      things += "</ul></ul></li>";
    } else {
      things += "</ul></li>";
    }
  }

  things += "</ul></section>";
  document.getElementById("bookList").innerHTML = things;
}
