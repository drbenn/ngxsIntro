import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SimpleValueState } from '../state/simple-value.state';

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss'],
})
export class DisplayValueComponent {
  // Create Select decorator w Observable
  @Select(SimpleValueState.value) value$!: Observable<number>;
}
