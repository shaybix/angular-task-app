import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() task: Task;
 @Input() index: number;
 hideEdit: boolean = true;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  onChecked(event) {
    let task = this.task;
    task.completed = this.task.completed ?  false : true;

    this.tasksService.taskCompleted.next({"index": this.index, "task": task});
  }

  onShowEdit() {
    this.hideEdit = false;
  }

  onTaskEdited(editedTask: Task) {
    this.tasksService.tasksEdited.next({"index": this.index, "task": editedTask})
    this.hideEdit = true;
  }

  onCancelEdit() {
    this.hideEdit = true;
  }

  onDeleteTask() {
    console.log("delete "+ this.index)
    this.tasksService.taskDeleted.next(this.index);
  }

}
