// Generated by CoffeeScript 1.6.2
(function() {
  window.html5support = {
    storage: function() {
      var error, p;

      try {
        p = 'localStorage';
        return p in window && window[p] !== null;
      } catch (_error) {
        error = _error;
        return false;
      }
    },
    getUserMedia: function() {
      if (navigator.getUserMedia) {
        return true;
      } else {
        return false;
      }
    }
  };

}).call(this);
