import { Dispatch } from 'redux'
import { deckAPI } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const setDecksTC=()=>(dispatch:Dispatch)=>{
  deckAPI.getDecks()
    .then(res =>{
      dispatch(setDecksAC(res.data.items))
    })
}