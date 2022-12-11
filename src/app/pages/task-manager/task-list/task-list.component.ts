import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModelCard, } from '@app/models';
import { State } from '@app/store/models/state.model';
import { CardAction } from '@app/store/actions/card.actions';

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

  private cardObserver: Observable<Array<ModelCard>>;
  public cards: Array<ModelCard>
  constructor(
    private store: Store<State>,
  ) {
    this.cardObserver = this.store.select((store) => {
      return store.cards
    });
    this.cardObserver.subscribe(data => this.cards = data);
  }

  ngOnInit(): void {
    this.taskCategory.map((task, index) => {
      return task.cards = this.cards.filter((card) => { return card.category == task.id })
    })
  }
}
