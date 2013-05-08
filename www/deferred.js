// http://api.jquery.com/category/deferred-object/

window.demo = window.demo || {};

$(function() {
  var dfd = demo.dfd = $.Deferred();
  var promise = demo.promise = dfd.promise();

  // A deferred is also a promise.
  // If anything a promise is a facade of a deferred with a smaller
  // API surface area

  promise.done(function() { alert("Your promise is done (kept)!"); });
  promise.fail(function() { alert("You broke your promise!"); });
  promise.always(function() { alert("Still going no matter what"); });
});

