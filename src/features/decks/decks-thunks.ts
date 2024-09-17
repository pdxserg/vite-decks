import { Dispatch } from 'redux'
import { deckAPI } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const setDecksTC=()=>(dispatch:Dispatch)=>{
  deckAPI.getDecks()
    .then(res =>{
      dispatch(setDecksAC(res.data.items))
    })
}
export const addDecksTC=(name: string)=>(dispatch:Dispatch)=>{
  deckAPI.addDeck(name)
    .then(res =>{
      dispatch(addDecksAC(res.data.items))
    })
}