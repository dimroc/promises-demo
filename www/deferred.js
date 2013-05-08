// http://api.jquery.com/category/deferred-object/

$(function() {
  window.dfd = $.Deferred();
  window.promise = dfd.promise();

  // A deferred is also a promise.
  // If anything a promise is a facade of a deferred with a smaller
  // API surface area

  promise.done(function() { alert("Your promise is done (kept)!"); });
  promise.fail(function() { alert("You broke your promise!"); });
  promise.always(function() { alert("Still going no matter what"); });

  // dfd.resolve();
  // dfd.reject();
});

