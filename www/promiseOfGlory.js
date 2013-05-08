
var getDataOfPromise = function() {
  var promise1 = $.get("/data/file1.json");
  var promise2 = $.get("/data/file2.json");
  var promise3 = $.get("/data/file3.json");

  // http://api.jquery.com/jQuery.when/

  $.when(promise1, promise2, promise3).then(function() {
    alert("We have success!");
  }, function() {
    alert("We have a centralized failure handler!");
  });
};
