import { Dispatch } from 'redux'
import { deckAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const setDecksTC=()=>(dispatch:Dispatch)=>{
  deckAPI.getDecks()
    .then(res =>{
      dispatch(setDecksAC(res.data.items))
    })
}
export const addDeckTC=(name:string)=>async (dispatch:Dispatch)=>{
  return  deckAPI.addDeck(name)
    .then(res =>{
       dispatch(addDeckAC(res.data))
    })
}