function receivesAFunction(callback) {
    // Check if callback is a function before calling it
    if (typeof callback === 'function') {
      callback();
    } else {
    ('Argument is not a function');
    }
  }

  function returnsANamedFunction(fn) {
    // Define and return a named function
    function namedFunction() {
    }
  
    return namedFunction;
  }

  function returnsAnAnonymousFunction(fn) {
    // Define and return an anonymous function
    return function() {
    }
  }
  