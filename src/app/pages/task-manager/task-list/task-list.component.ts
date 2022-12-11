import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModelCard, ModelTaskCategory } from '@app/models';
import { State } from '@app/store/models/state.model';
import { CardAction } from '@app/store/actions/card.actions';
import { CardsService } from "@app/services";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  public taskCategory: any[] = [];

  public cards: Array<ModelCard>
  public cardsClone: Array<ModelCard>
  constructor(
    private _cardsService: CardsService,
  ) {
    this._cardsService.cardObserver$.subscribe(data => this.cards = data);

  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    if (this.cards != this.cardsClone) {
      this.cardsClone = this.cards;
      this.taskCategory = this._cardsService.filterByCategory();
    }
  }

}
