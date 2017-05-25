import { Component, OnInit, OnDestroy} from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  // tasks: {id: number, title: string, completed: boolean}[] = [
  //   {"id": 1, "title": "I need to buy shoes", "completed": false },
  //   {"id": 2, "title": "Buy groceries", "completed": false },
  //   {"id": 3, "title": "Help kids with the homework", "completed": false },
  //   {"id": 4, "title": "Finish php project!", "completed": false }
  // ];

  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {

    this.tasksService.loadTasks().subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }

    )

    this.tasksService.taskAdded.subscribe(
      (task: {id: number, title: string, completed: boolean}) => {
       this.tasks.push(task); 
      }
    )

    this.tasksService.taskCompleted.subscribe(
      (response: {index: number, task: Task}) => {
        console.log('triggered taskCompleted subscription!')
        this.tasks.splice(response.index, 1, response.task)
      },
      (error) => {console.log(error)},
      () => {console.log('completed!')}
    )

    this.tasksService.taskDeleted.subscribe(
      (index: number) => {
        this.tasks.splice(index, 1);
      }
    )

    this.tasksService.taskEdited.subscribe(
      (response: {index: number, task: {id: number, title: string, completed: boolean}}) => {
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
