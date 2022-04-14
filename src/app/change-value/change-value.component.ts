import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import {
  IncrementValue,
  DecrementValue,
  ResetValue,
  SetValue,
} from '../state/simple-value.actions';
import { SimpleValueState } from '../state/simple-value.state';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.scss'],
})
// Subscribing to observable, and assign the result of the observable to a local variable
export class ChangeValueComponent implements OnDestroy {
  @Select(SimpleValueState.value) value$!: Observable<number>;
  value!: number;

  private valueSubscription: Subscription;
  // Calling actions from the state
  constructor(private store: Store) {
    this.valueSubscription = this.value$.subscribe((value: number) => {
      this.value = value;
    });
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }

  increment(): void {
    this.store.dispatch(new IncrementValue());
  }

  decrement(): void {
    this.store.dispatch(new DecrementValue());
  }
  resetValue(): void {
    this.store.dispatch(new ResetValue());
  }
  setValue(value: number | null): void {
    if (value) {
      this.store.dispatch(new SetValue(value));
    } else {
      this.store.dispatch(new ResetValue());
    }
  }
}
