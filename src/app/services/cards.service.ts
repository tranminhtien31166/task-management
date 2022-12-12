import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser, ModelCard, ModelTaskCategory } from '@app/models';
import { Store } from '@ngrx/store';
import { State } from '@app/store/models/state.model';

@Injectable({
    providedIn: 'root'
})

export class CardsService {
    // private _currentCardSubject: BehaviorSubject<ModelCard> = new BehaviorSubject<ModelCard>(null);
    // public currentCard: Observable<ModelCard> = this._currentCardSubject.asObservable();

    public taskCategory = [
        {
            id: 0,
            name: "Draft",
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
    public cards: Array<ModelCard>
    public cardObserver$: Observable<Array<ModelCard>>;
    constructor(
        private store: Store<State>,
    ) {
        this.cardObserver$ = this.store.select((store) => {
            return store.cards
        });
    }
    public filterByCategory() {
        this.cardObserver$.subscribe(data => this.cards = data);
        this.taskCategory.map((task, index) => {
            this.taskCategory[index].cards = this.cards.filter((card) => { return card.category == task.id })
        })
        return this.taskCategory;
    }
}
