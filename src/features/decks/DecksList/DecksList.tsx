import s from './DecksList.module.css'
import { useEffect } from 'react'
import { deckAPI, DeckType } from '../decks-api.ts'
import { AppRootState, store, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { useSelector } from 'react-redux'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { setDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {
const decks =useSelector<AppRootState,DeckType[]>(state => state.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
dispatch(setDecksTC())
  }, [])

  return <ul className={s.list}>
    {decks.map(deck=>{
      return<DeckItem
        key={deck.id}
        deck={deck}/>
        }
    )}
  </ul>
}
