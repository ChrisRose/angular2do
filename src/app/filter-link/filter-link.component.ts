import { Component, OnInit, Input } from '@angular/core';
import { TodoStore } from '../todo.store';
import { setVisibilityFilter } from '../actions';

@Component({
  selector: 'app-filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.css']
})
export class FilterLinkComponent implements OnInit {
  @Input()
  filter: string;

  constructor(private TodoStore: TodoStore) {
  }

  ngOnInit() {
  }

}
