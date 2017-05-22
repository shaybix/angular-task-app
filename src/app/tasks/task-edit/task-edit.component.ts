import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Input() task: Task;
  @Output() taskEdited: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editCancelled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  onEditTask() {
    let task = this.task;
    this.taskEdited.emit(task);
  }

  onEditTaskCancelled() {
    this.editCancelled.emit(true);
  }

}
