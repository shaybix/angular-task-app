import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  task: Task = {
    "id": null,
    "title": "",
    "completed": false,
    "due": new Date  
  };

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }


  onAddTask(form: NgForm){
    let task  = this.task;
    task.title = form.value.title;
    task.due = form.value.date;
    
    console.log(form.value.date)

    this.tasksService.createTask(task);
    form.reset();


  }

}
