import { CardAction } from '../actions/card.actions';
import { ModelCard } from '@app/models';
import { stringify } from 'querystring';


export function setCardsFromLocalStore(cards) {
  localStorage.setItem('CARDS', JSON.stringify(cards))
}
export function CardReducer(
  state: Array<ModelCard> = [],
  action: CardAction
) {
  switch (action.type) {
    case 'FETCH_CARDS':
      return action.payload;
    case 'ADD_ITEM':
      setCardsFromLocalStore([...state, action.payload]);
      return [...state, action.payload];
    default:
      return state;
  }
}