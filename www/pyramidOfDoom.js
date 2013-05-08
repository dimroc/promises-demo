// http://tritarget.org/blog/2012/11/28/the-pyramid-of-doom-a-javascript-style-trap/

var getDataOfDoom = function() {
  $.get("/data/file1.json", function(data, textStatus, jqXHR) {
    $.get("/data/file2.json", function(data, textStatus, jqXHR) {
      $.get("/data/file3.json", function(data, textStatus, jqXHR) {
        alert("We have success! But what if we had a failure?");
      });
    });
  });
};
