import s from './DecksList.module.css'
import { useEffect } from 'react'
import { deckAPI } from '../decks-api.ts'

export const DecksList = () => {
  useEffect(() => {
deckAPI.getDecks()
  .then(res =>{})
  }, [])
  return <ul className={s.list}></ul>
}
