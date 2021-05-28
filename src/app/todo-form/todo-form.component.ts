import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {

  title = ''
  desc = ''

  @Output() todoOut: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void { }

  onTodoCreate() {
    if (this.title.trim() && this.desc.trim()) {
      const todo: Todo = {
        title: this.title,
        desc: this.desc
      }

      this.todoOut.emit(todo);
      this.title = this.desc = '';
    }
  }
}
