import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  observable1 = new Observable((observer) => {
    observer.next('Hello');
    // observer.error('Error');
    return {
      unsubscribe() {
        console.log('unsubscribed');
        document.getElementById('log').innerText += '\n Unsubscribed';
      }
    };
  });
  observable2 = of(1, 2, 3);
  sequence = new Observable(this.sequenceSubscriber);
  ob1Var;
  myObserver = {
    next: x => document.getElementById('log').innerText += '\n' + x,
    error: err => document.getElementById('log').innerText += '\n' + err,
    complete: () => document.getElementById('log').innerText += '\n complete'
  };
  ESC_KEY = 27;
  nameInput;
  subscription;
  constructor() { }

  ngOnInit(): void {
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.ob1Var = this.observable1.subscribe(this.myObserver);
    this.observable2.subscribe(this.myObserver);
    this.sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });


    this.subscription = this.fromEvent(this.nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === this.ESC_KEY) {
          this.nameInput.value = '';
        }
      });
  }

  // This function runs when subscribe() is called
  sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return { unsubscribe() { } };
  }

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      target.addEventListener(eventName, handler);

      return () => { target.removeEventListener(eventName, handler); };
    });
  }

  ngOnDestroy() {
    this.ob1Var.unsubscribe();
  }
}
