import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges {
 @Input() task: Task;
 @Input() index: number;
 hideEdit: boolean = true;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.task.completed)
  }

  onChecked(element: HTMLInputElement) {
    let task = this.task;
    task.completed = this.task.completed ?  false : true;

    this.tasksService.completeTask(task).subscribe(
      (task: Task) => {
        this.tasksService.taskCompleted.next({"index": this.index, "task": task})
      }
    );
  }

  onShowEdit() {
    this.hideEdit = false;
  }

  onTaskEdited(editedTask: Task) {
    this.tasksService.saveTask(this.index, this.task);
    this.hideEdit = true;
  }

  onCancelEdit() {
    this.hideEdit = true;
  }

  onDeleteTask() {
    this.tasksService.deleteTask(this.index, this.task)
  }

}
