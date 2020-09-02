import React, { useEffect, useState } from 'react';

import store from './store';
import { beliSatuDonatAction } from './actions/beliSatuDonatAction';
import { buatSatuDonatAction } from './actions/buatSatuDonatAction';
import { beliSatuCakeAction } from './actions/beliSatuCakeAction';
import './App.css';
import { buatSatuCakeAction } from './actions/buatSatuCakeAction';

function App() {

  const initialStateBahan = {
    tepung: 0,
    coklat: 0,
  }

  const initialStateBahanCake = {
    mentega: 0,
    telor: 0,
    cherry: 0,
  }

  const initialStateDonut = {
    quantity: 0,
  }

  const initialStateCake = {
    quantity: 0,
  }

  const [bahan, setBahan] = useState(initialStateBahan);
  const [bahanCake, setBahanCake] = useState(initialStateBahanCake);
  const [donut, setDonut] = useState(initialStateDonut);
  const [cake, setCake] = useState(initialStateCake);

  useEffect(() => {
    // BLOCK CODE SAAT PERTAMA KALI HALAMAN DIAKSES ATAU DIRENDER ULANG

    // Daftarkan redux kedalam App.js
    const state = store.getState();

    console.log(state)

    // Declare data yang dibutuhkan pada App.js
    const bahanDonut = state.bahanDonut;
    const donut = state.donut;
    const cake = state.cake;
    const bahanCake = state.bahanCake;
    
    // Set data from local scope variable in app.js to global variable
    setBahan(bahanDonut);
    setDonut(donut);
    setCake(cake);
    setBahanCake(bahanCake);

    // SUBSCRIBE
    // BLOCK CODE SAAT ADA ACTION/UPDATE DARI REDUX
    store.subscribe(() => {
      const state = store.getState();
      // Declare data yang dibutuhkan pada App.js
      const bahanDonut = state.bahanDonut;
      const donut = state.donut;
      const cake = state.cake;
      const bahanCake = state.bahanCake;
      
      // Set data from local scope variable in app.js to global variable
      setBahan(bahanDonut);
      setDonut(donut);
      setCake(cake);
      setBahanCake(bahanCake);
    });
  }, [])

  const handleBuatDonat = () => {
    console.log(store.getState().bahanDonut);
    store.dispatch(buatSatuDonatAction);
    console.log(store.getState().bahanDonut);
  }

  const handleBeliDonut = () => {
    store.dispatch(beliSatuDonatAction);
  }

  const handleBeliCake = () => {
    store.dispatch(beliSatuCakeAction);
  }

  const handleBuatCake = () => {
    store.dispatch(buatSatuCakeAction);
  }

  return (
    <div className="App">
      <h1>TOKO ROTI IMPACT</h1>
      <div className="product">
        <div>Donut {donut.quantity}</div>
        <div>Cake {cake.quantity}</div>
      </div>
      <div className="wrapperIngredients">
        Ingredients
        <div className="ingredients">
          <div>TEPUNG {bahan.tepung}</div>
          <div>COKLAT {bahan.coklat}</div>
          <div>CHERRY {bahanCake.cherry}</div>
          <div>MENTEGA {bahanCake.mentega}</div>
          <div>TELOR {bahanCake.telor}</div>
        </div>
      </div>
      <div className="action">
        <button onClick={handleBuatDonat}>Buat Donat</button>
        <button onClick={handleBuatCake}>Buat Cake</button>
      </div>
      <div className="action">
        <button onClick={handleBeliDonut}>Beli Donat</button>
        <button onClick={handleBeliCake}>Beli Cake</button>
      </div>
    </div>
  );
}

export default App;
