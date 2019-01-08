(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.uaSwitch = mod.exports;
  }
})(this, function () {
  'use strict';

  var UaSwitch = function UaSwitch() {
    var ua = navigator.userAgent;
    var isPc = location.pathname.match('/sp/') === null;
    var condition = ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') === -1 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0;

    if (condition && isPc) {
      var rootRelativePath = location.href.split(location.host)[1];
      var path = rootRelativePath.split('/');
      path.splice(1, 0, 'sp');
      location.href = path.join('/');
    } else if (!condition && !isPc) {
      var _path = location.pathname.replace('/sp', '');
      location.href = _path;
    }
  };

  UaSwitch();
});