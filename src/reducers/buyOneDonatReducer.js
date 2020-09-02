const donut = {
  quantity: 100,
}

const buyOneDonutReducer = (state = donut, action) => {
  // Condition based Action
  if (action.type === 'BELI_SATU_DONAT') {
    const newState = {
      quantity: state.quantity - 1,
    }
    return newState;
  }
  return state;
}

export default buyOneDonutReducer;
