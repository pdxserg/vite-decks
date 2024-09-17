import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { useEffect } from 'react'
import { setDecksTC } from '../decks-thunks.ts'



export const useGetDecks =()=>{

  const decks =useAppSelector(state => state.decksReducer.decks)
  console.log(decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setDecksTC())
  }, [])
  return{
    decks
  }



}

