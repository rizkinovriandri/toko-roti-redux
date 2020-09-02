const bahanCake = {
  mentega: 100,
  telor: 50,
  cherry: 100,
}

const makeOneCakeReducer = (state = bahanCake, action) => {
  if(action.type === 'BUAT_SATU_CAKE') {
    const newState = {
      mentega: state.mentega - 40,
      telor: state.telor - 3,
      cherry: state.cherry - 20,
    }
    return newState;
  }
  return state;
}

export default makeOneCakeReducer;

