import { Component, OnInit, OnDestroy} from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: {id: number, title: string, completed: boolean}[] = [
    {"id": 1, "title": "I need to buy shoes", "completed": false },
    {"id": 2, "title": "Buy groceries", "completed": false },
    {"id": 3, "title": "Help kids with the homework", "completed": false },
    {"id": 4, "title": "Finish php project!", "completed": false }

  ];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    console.log(this.tasks);
    this.tasksService.tasksAdded.subscribe(
      (task: {id: number, title: string, completed: boolean}) => {
       this.tasks.push(task); 
      }
    )

    this.tasksService.taskCompleted.subscribe(
      (response: {index: number, task: {id: number, title: string, completed: boolean}}) => {
        console.log(response.task);
        return this.tasks.splice(response.index, 1, response.task)

      }
    )

    this.tasksService.taskDeleted.subscribe(
      (index: number) => {
        return this.tasks.splice(index, 1);
      }
    )

    this.tasksService.tasksEdited.subscribe(
      (response: {index: number, task: {id: number, title: string, completed: boolean}}) => {
        return this.tasks.splice(response.index, 1, response.task);
      }
    )

  }

  ngOnDestroy() {
    this.tasksService.tasksAdded.unsubscribe();
    this.tasksService.taskCompleted.unsubscribe();
    this.tasksService.taskDeleted.unsubscribe();
    this.tasksService.tasksEdited.unsubscribe();

  }

}
