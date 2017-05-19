import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() task: {id: number, title: string, completed: boolean};
 @Input() index: number;
//  @Input() task;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  onChecked(event) {
    let task = this.task;
    task.completed = this.task.completed ?  false : true;

    this.tasksService.taskCompleted.next({"index": this.index, "task": task});
  }

  onDelete() {
    console.log("delete "+ this.index)
    this.tasksService.taskDeleted.next(this.index);
  }

}
