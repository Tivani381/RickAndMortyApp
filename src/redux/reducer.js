import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER} from './action-types'

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_FAVORITES:
            const copyCharacters = [...state.allCharacters, action.payload]
            
            return {
                ...state,
                myFavorites: copyCharacters,
                allCharacters: [...copyCharacters]
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id !== action.payload)
            }

        case FILTER:
            const filterCharacter = state.allCharacters.filter((character)=> character.gender === action.payload)
            return {
                ...state,
                myFavorites: filterCharacter
            }

        case ORDER:
            const orderCharacter = state.allCharacters.sort((a, b)=> {
                if(action.payload === 'Ascendente') {
                    if(a.id < b.id) return -1
                    if(b.id < a.id) return 1
                    return 0
                }
                else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                    return 0
                }
            })
            return {
                ...state,
                myFavorites: orderCharacter
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer