var getDataOfDoomParallel = function() {
  var handler = function(data, textStatus, jqXHR) {
    alert("We have success! But what if we had a failure?");
  };

  $.get("/data/file1.json", handler);
  $.get("/data/file2.json", handler);
  $.get("/data/file3.json", handler);

  // How do we respond when they all succeed?
  // Error handling?
};


// http://api.jquery.com/jQuery.when/

var getDataOfPromiseParallel = function() {
  var promise1 = $.get("/data/file1.json");
  var promise2 = $.get("/data/file2.json");
  var promise3 = $.get("/data/file3.json");


  $.when(promise1, promise2, promise3)
    .then(function() { alert("We have success!"); },
          function() { alert("We have a centralized failure handler!");
  });
};
