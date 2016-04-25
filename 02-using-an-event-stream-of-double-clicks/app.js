'use strict';

var button = document.querySelector('.button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');

var doubleClickStream = clickStream
  .buffer(() => clickStream.debounce(250))
  .map(arr => arr.length)
  .filter(len => len === 2);

doubleClickStream.subscribe(event => {
  label.textContent = 'double clock';
});

doubleClickStream
  .delay(1000)
  .subscribe(suggestion => {
    label.textContent = '-';
  });