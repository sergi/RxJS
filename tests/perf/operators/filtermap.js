var RxOld = require('../old/rx.lite');
var RxNew = require('../../../dist/rx.lite');

var oldStart = new Date();
RxOld.Observable.range(0, 2500000)
  .map(function (x) { return x * x; })
  .filter(function (x) { return x % 3 === 0; })
  .subscribeOnCompleted(function () {
    var elapsed = new Date() - oldStart;
    console.log('Old time elapsed:', elapsed);
  });

var newStart = new Date();
RxNew.Observable.range(0, 2500000)
  .map(function (x) { return x * x; })
  .filter(function (x) { return x % 3 === 0; })
  .subscribeOnCompleted(function () {
    var elapsed = new Date() - newStart;
    console.log('New time elapsed:', elapsed);
  });
