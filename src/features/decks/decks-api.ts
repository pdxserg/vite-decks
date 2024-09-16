import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const deckAPI ={
  getDecks(){
    return instance.get<GetDecksResponseType>(`/v2/decks`)
  }

}


//TYPES
// type DeckType={
//   "id": string
//   "userId": string
//   "name": string
//   "isPrivate": boolean
//   "cover": string
//   "created": string
//   "updated": string
//   "cardsCount": number
//   "isFavorite": boolean
//   "author": {
//     "id": string
//     "name": string
//   }
// }
// Тип для объекта автора
type AuthorType= {
  id: string;
  name: string;
}

// Тип для объекта колоды
export type DeckType= {
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string | null;
  created: string;
  updated: string;
  cardsCount: number;
  isFavorite: boolean;
  author: AuthorType;
}

// Тип для объекта пагинации
type PaginationType= {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

// Тип для полного ответа от API
type GetDecksResponseType ={
  items: DeckType[];
  pagination: PaginationType;
}
//
// // Теперь можно типизировать вызов API
// export const deckAPI = {
//   getDecks() {
//     return instance.get<GetDecksResponseType>(`/v2/decks`);
//   }
// }
