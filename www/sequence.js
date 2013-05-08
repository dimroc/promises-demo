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


// Most, if not all, async jQuery methods now
// quack to promises, and have a promise() method.

// $.get("")
// $.get("").promise()

var getDataOfPromise = function() {
  $.get("/data/file1.json")
    .then(function() { return $.get("/data/file2.json"); })
    .then(function() { return $.get("/data/file3.json"); })
    .then(function() { alert("We have success!"); },
          function() { alert("We have a centralized failure handler!"); }
         );

  // http://api.jquery.com/jQuery.then/
};

