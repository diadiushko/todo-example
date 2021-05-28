import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-clause',
  templateUrl: './todo-clause.component.html',
  styleUrls: ['./todo-clause.component.scss']
})
export class TodoClauseComponent implements OnInit {

  @Input() todo!: Todo
  constructor() { }

  ngOnInit(): void {
  }

}
