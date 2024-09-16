import { DeckType } from './decks-api.ts'

// const initialState = {
//   // decks: [] as any[], // todo: add type
//   decks:[]
//   // searchParams: {
//   //   name: '',
//   // },
// }
//  type DecksState = typeof initialState

const initialState: DeckType[] = []


type DecksActions = ReturnType<typeof setDecksAC>
export const decksReducer = (state = initialState, action: DecksActions): DeckType[] => {
  switch (action.type) {
    case 'SET-DECKS':{
      return  action.decks
    }
    default:
      return state
  }
}



export const setDecksAC =(decks: DeckType[])=>{
  return {
    type: 'SET-DECKS',
decks
  }as const
}
