import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  title: string;
  completed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChecked(event) {
    console.log(event.target);
  }

}
