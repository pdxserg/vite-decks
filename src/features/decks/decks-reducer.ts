import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}
 type DecksState = typeof initialState




type DecksActions =
  | ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>

export const decksReducer = (state:DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {...state, decks: action.decks }

    case 'ADD-DECK':
      return {...state, decks: [action.oneDeck, ...state.decks]}

    default:
      return state
  }
}


export const setDecksAC = (decks: DeckType[]) => {
  return { type: 'SET-DECKS', decks, } as const
}
export const addDeckAC = (oneDeck: DeckType) => {
  return { type: 'ADD-DECK', oneDeck } as const
}
