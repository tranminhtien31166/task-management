import { Component, OnInit } from "@angular/core";

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
      cards: [{ id: 1, name: "hihi" }, { id: 2, name: "hihi2" }],
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

  constructor() { }

  ngOnInit(): void { }
}
