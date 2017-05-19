import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  private task: {id: number, title: string, completed: boolean} = {
    "id": null,
    "title": "",
    "completed": false
  };

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }


  onAddTask(form: NgForm){
    this.task.title = form.value.title;
    this.tasksService.tasksAdded.next(this.task);
    console.log(form.value.title);

  }

}
