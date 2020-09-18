import React, { useEffect, useState } from 'react';
import './App.css';

// Import Store
import store from './store';

// Import Action
import buatDonatAction from './actions/buatDonatAction';
import beliDonatAction from './actions/beliDonatAction';
import buatCakeAction from './actions/buatCakeAction';
import beliCakeAction from './actions/beliCakeAction';

const App = () => {

  const initialState = {
    tepung: 0,
    coklat: 0,
    cherry: 0,
    mentega: 0,
    telor: 0,
  }

  const initialSaldo = {
    wallet: 0,
  }

  const [bahan, setBahan] = useState(initialState);
  const [saldo, setSaldo] = useState(initialSaldo)
  
  useEffect(() => {
    // Local Variable
    const stateBahan = store.getState().bahan;
    const stateTransaction = store.getState().transaction;

    setBahan(stateBahan);
    setSaldo(stateTransaction);

    //Update data
    store.subscribe(() => {
    const stateBahan = store.getState().bahan;
    const stateTransaction = store.getState().transaction;

    setBahan(stateBahan);
    setSaldo(stateTransaction);
    })
  }, []);

  const handleBuatDonat = () => {
    store.dispatch(buatDonatAction)
  }

  const handleBuatCake = () => {
    store.dispatch(buatCakeAction)
  }

  const handleBeliDonat = () => {
    store.dispatch(beliDonatAction);
  }

  const handleBeliCake = () => {
    store.dispatch(beliCakeAction);
  }

  return (
    <div className="App">
      <h1>TOKO ROTI</h1>
      <h2>Saldo {saldo.wallet}</h2>
      <div className="product">
        <div>Donut 0</div>
        <div>Cake 0</div>
      </div>
      <div className="wrapperIngredients">
        Ingredients
        <div className="ingredients">
          <div>TEPUNG {bahan.tepung}</div>
          <div>COKLAT {bahan.coklat}</div>
          <div>CHERRY {bahan.cherry}</div>
          <div>MENTEGA {bahan.mentega}</div>
          <div>TELOR {bahan.telor}</div>
        </div>
      </div>
      <div className="action">
        <button type="button" onClick={handleBuatDonat}>Buat Donat</button>
        <button type="button" onClick={handleBuatCake}>Buat Cake</button>
      </div>
      <div className="action">
        <button type="button" onClick={handleBeliDonat}>Beli Donat</button>
        <button type="button" onClick={handleBeliCake}>Beli Cake</button>
      </div>
    </div>
  );
}

export default App;
