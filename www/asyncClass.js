window.demo = window.demo || {};

$(function() {
  demo.AsyncClass = function() {
    this._dfd = $.Deferred();
  };

  _.extend(demo.AsyncClass.prototype, {

    fetch: function() {
      var that = this;

      setInterval(
        function() { console.log("async state: ", that._dfd.state()); },
        1000);

      setTimeout(
        function() { return that._dfd.resolve(); },
        5000);

      return this._dfd.promise(); // returns a promise!
    }
  });
});
