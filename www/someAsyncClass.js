window.SomeAsyncClass = function() {
  this._dfd = $.Deferred();
};

_.extend(window.SomeAsyncClass.prototype, {
  update: function() {
    var that = this;

    setInterval(function() { console.log("async state: ", that._dfd.state()); },
      1000);

    setTimeout(function() { return that._dfd.resolve(); }, 5000);

    return this._dfd.promise(); // returns a promise!
  }
});

// Can now create our own methods that return promises
// someAsyncInstance.update().done(function() { alert("DONE") });

// This contrived Asynchronous Class could very
// easily be App.initialize to wrap DomReady and FB SDK initialize

// Promises are also prevalent in ruby's EventMachine
//
// https://github.com/igrigorik/em-http-request/wiki/Issuing-Requests
// https://github.com/igrigorik/em-http-request/wiki/Parallel-Requests
