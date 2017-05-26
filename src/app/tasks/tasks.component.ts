import { Component, OnInit, OnDestroy} from '@angular/core';
import { MdSnackBar } from '@angular/material';
 
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  tasks: Task[];

  constructor(private tasksService: TasksService, public snackbar: MdSnackBar) { }

  ngOnInit() {

    this.tasksService.loadTasks().subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      })

    this.tasksService.taskAdded.subscribe(
      (task: Task) => {
       this.tasks.push(task); 
      })

    this.tasksService.taskCompleted.subscribe(
      (response: {index: number, task: Task}) => {
        this.tasks.splice(response.index, 1, response.task)},
      (error) => {},
      () => {}
      )

    this.tasksService.taskDeleted.subscribe(
      (index: number) => {
        let task = this.tasks[index]
        this.tasks.splice(index, 1);
        this.snackbar.open(`task: ${task.title}`, "deleted")
      }
    )

    this.tasksService.taskEdited.subscribe(
      (response: {index: number, task: Task}) => {
        this.tasks.splice(response.index, 1, response.task);
      }
    )

  }

  ngOnDestroy() {
    this.tasksService.taskAdded.unsubscribe();
    this.tasksService.taskCompleted.unsubscribe();
    this.tasksService.taskDeleted.unsubscribe();
    this.tasksService.taskEdited.unsubscribe();
  }

}
