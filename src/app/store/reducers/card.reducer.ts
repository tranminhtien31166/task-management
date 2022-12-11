import { CardAction } from '../actions/card.actions';
import { ModelCard } from '@app/models';

export function CardReducer(
  state: Array<ModelCard> = [],
  action: CardAction
) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
}