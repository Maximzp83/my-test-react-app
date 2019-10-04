// import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload.filter
      
    default:
      return state
  }
}

export default visibilityFilter