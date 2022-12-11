import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService, CardsService } from '@app/services';
import { ModelCard, ModelUser } from '@app/models';
import { State } from '@app/store/models/state.model';
import { CardAction } from '@app/store/actions/card.actions';
import _find from 'lodash/find';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public cards: Array<ModelCard>
  public card: ModelCard
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private _cardsService: CardsService,
    public dialogRef: MatDialogRef<TaskDetailComponent>,
    private store: Store<State>,
  ) {
    this._cardsService.cardObserver$.subscribe(data => this.card = _find(data, (o) => { return o.id == this.data.id }));
  }

  ngOnInit(): void {
  }
  public closeFormDialog(close: any) {
    this.dialogRef.close(close);
  }
  public openFormAdd(el) {
    let parent = el.currentTarget.parentNode.parentNode;
    console.log(parent);
    parent.querySelector('.form-add').classList.remove('hidden');
    parent.querySelector('.btn-add').classList.add('hidden');
  }
  public closeFormAdd(el) {
    let parent = el.currentTarget.parentNode.parentNode.parentNode;
    parent.querySelector('.form-add').classList.add('hidden');
    parent.querySelector('.btn-add').classList.remove('hidden');
  }
  public addForm(el) {
    let parent = el.currentTarget.parentNode.parentNode.parentNode;
    let value = parent.querySelector('.input').value;
    if (value) {
      let data = JSON.parse(JSON.stringify(this.data));
      data.name = value;
      this.store.dispatch(new CardAction(data, "UPDATE_CARD_BY_ID"));
      parent.querySelector('.input').value = value;
      this.closeFormAdd(el);
    }
  }

  public catchFocus(el) {
    let parent = el.currentTarget.parentNode;
    parent.querySelector('.btn-add').classList.remove('hidden');
  }
  public closeFocus(el) {
    let parent = el.currentTarget.parentNode.parentNode;
    parent.querySelector('.btn-add').classList.add('hidden');
  }
  public updateDescription(el) {
    let parent = el.currentTarget.parentNode.parentNode;
    let value = parent.querySelector('.form-add').value;
    if (value) {
      let card = JSON.parse(JSON.stringify(this.card));
      card.description = value;
      this.store.dispatch(new CardAction(card, "UPDATE_CARD_BY_ID"));
      this.closeFocus(el);
    }
  }

}
