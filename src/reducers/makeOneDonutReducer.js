const bahan = {
  tepung: 100,
  coklat: 100,
}

const makeOneDonutReducer = (state = bahan, action) => {
  // Condition based Action
  if (action.type === 'BUAT_SATU_DONAT') {
    const newState = {
      tepung: state.tepung - 20,
      coklat: state.coklat - 30,
    }
    return newState;
  }
  return state;
}

export default makeOneDonutReducer;
