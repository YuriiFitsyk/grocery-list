import React, { useState } from "react";
import { GoodsForm } from './components/GoodsForm';
import { GoodsList } from './components/GoodsList';
import './App.css';

function App() {
  const [goods, setGoods] = useState([]);

  const addGood = (good) => {
    setGoods(prevGoods => [...prevGoods, good])
  }

  return (
    <div className="App">
      <GoodsForm goods={goods} addGood={addGood}/>
      <GoodsList goods={goods}/>
    </div>
  );
}

export default App;
