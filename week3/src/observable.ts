// Source code here
const myObservable = Observable.of(5, 6, 7);
     
const myObserver = {
  next: x => console.log('Start: ' + x),
  error: err => console.error('Error: ' + err),
  complete: () => console.log('Completed'),
};
 
myObservable.subscribe(myObserver);
