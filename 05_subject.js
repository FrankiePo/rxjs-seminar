/*
 * https://jsbin.com/hatered/edit?js,console
 */

const observable = Rx.Observable.create(function(source) {
  source.next(Math.random());
  source.complete();
}).delay(100);

const subject = new Rx.Subject();

subject.subscribe(v => console.log('consumer A: ' + v));
subject.subscribe(v => console.log('consumer B: ' + v));

observable.subscribe(subject);
