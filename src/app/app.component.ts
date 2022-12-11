import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser, ModelCard } from '@app/models';
import { Store } from '@ngrx/store';
import { State } from '@app/store/models/state.model';
import { CardAction } from './store/actions/card.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private _cardsSubject: BehaviorSubject<ModelCard> = new BehaviorSubject<ModelCard>(null);
  // public cards: Observable<ModelCard> = this._cardsSubject.asObservable();
  constructor(
    private store: Store<State>,
  ) { }
  ngOnInit(): void {
    let cards = JSON.parse(localStorage.getItem('CARDS'));
    this.store.dispatch(new CardAction(cards, "FETCH_CARDS"));
  }

}
