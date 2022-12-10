import { Component, OnInit } from "@angular/core";
// import {BackendService} from './backend.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { ModelTaskCategory } from "@app/constant";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  public taskCategory: any[] = [
    {
      id: 0,
      name: "Draf",
      color: "#adb5bd",
      cards: [],
    },
    {
      id: 1,
      name: "Doing",
      color: "#c2d3fb",
      cards: [],
    },
    {
      id: 2,
      name: "Review",
      color: "#fbe3c4",
      cards: [],
    },
    {
      id: 3,
      name: "Done",
      color: "#d4f3db",
      cards: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
