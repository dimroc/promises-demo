var facebookDfd = $.Deferred();

var asyncLoadOfFacebookSdk = function() {
  return facebookDfd.promise();
};

$.when(facebookDfd, $.ready.promise())
  .then(function() { alert("Application Ready!"); });


// Whenever we trigger facebookDfd.resolve(),
// Our new application ready will fire.
