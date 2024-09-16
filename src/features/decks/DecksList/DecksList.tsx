import s from './DecksList.module.css'
import { useEffect } from 'react'
import { deckAPI, DeckType } from '../decks-api.ts'
import { AppRootState, store, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { useSelector } from 'react-redux'

export const DecksList = () => {
const decks =useSelector<AppRootState,DeckType[]>(state => state.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
deckAPI.getDecks()
  .then(res =>{
dispatch(setDecksAC(res.data.items))
  })
  }, [])
  return <ul className={s.list}>
    {decks.map(deck=>{
      return <div key={deck.id}>
        <div>name:{deck.name}</div>
        <div> data create:{deck.created}</div>

      </div>
    })}

  </ul>
}
