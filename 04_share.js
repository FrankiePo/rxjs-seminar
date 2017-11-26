/*
 * https://jsbin.com/tusihun/edit?js,console
 */

const observable = Rx.Observable.create(source => {
  source.next(Math.random());
  source.complete();
}).delay(100)
// .share();


observable.subscribe(v => console.log('consumer A: ' + v));
observable.subscribe(v => console.log('consumer B: ' + v));
