let defaultState = {
  notes: [],
}

const mainReducer = function(state = defaultState, action) {
  switch(action.type) {
    case "SET_DATA":
    return {
      ...state,
      notes: action.notes,
    }
    default: {
      return {
        ...defaultState
      }
    }
  }
}

export default mainReducer;