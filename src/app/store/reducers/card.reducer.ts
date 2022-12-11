import { CardAction } from '../actions/card.actions';
import { ModelCard } from '@app/models';
import _findIndex from 'lodash/findIndex';

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
    case 'UPDATE_CARD_BY_ID':
      let stateParse = JSON.parse(JSON.stringify(state));
      let index = _findIndex(stateParse, function (o) { return o.id == action.payload.id; });
      stateParse[index] = action.payload;
      setCardsFromLocalStore(stateParse);
      return stateParse;
    default:
      return state;
  }
}