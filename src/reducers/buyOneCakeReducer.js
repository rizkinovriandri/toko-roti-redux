const cake = {
  quantity: 100,
}

// Function
const buyOneCakeReducer = (state = cake, action) => {
  if(action.type === 'BELI_SATU_CAKE') {
    const newState = {
      quantity: state.quantity - 1,
    }
    return newState;
  }
  return state;
}

export default buyOneCakeReducer;
