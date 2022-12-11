import { Action } from '@ngrx/store';
import { ModelCard } from '@app/models';

export class CardAction implements Action {
  constructor(
    public payload: ModelCard,
    public type: string
  ) { }
}