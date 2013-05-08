// Most, if not all, async jQuery methods now
// quack to promises, and have a promise()
// method.

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


var getDataOfPromiseParallel = function() {
  var promise1 = $.get("/data/file1.json");
  var promise2 = $.get("/data/file2.json");
  var promise3 = $.get("/data/file3.json");


  // http://api.jquery.com/jQuery.when/
  $.when(promise1, promise2, promise3)
    .then(function() { alert("We have success!"); },
          function() { alert("We have a centralized failure handler!");
  });
};
