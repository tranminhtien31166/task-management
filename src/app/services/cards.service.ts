import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser, ModelCard } from '@app/models';
import { Store } from '@ngrx/store';
import { State } from '@app/store/models/state.model';

@Injectable({
    providedIn: 'root'
})

export class CardsService {
    // private _currentCardSubject: BehaviorSubject<ModelCard> = new BehaviorSubject<ModelCard>(null);
    // public currentCard: Observable<ModelCard> = this._currentCardSubject.asObservable();

    public cardObserver$: Observable<Array<ModelCard>>;
    constructor(
        private store: Store<State>,
    ) {
        this.cardObserver$ = this.store.select((store) => {
            return store.cards
        });
    }
}
