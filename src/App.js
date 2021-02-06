import React, { useState } from "react";
import { GoodsForm } from './components/GoodsForm';
import { GoodsList } from './components/GoodsList';
import { GoodDetails } from './components/GoodDetails';
import './App.css';

function App() {
  const [goods, setGoods] = useState([]);
  const [selectedGoodId, setSelectedGoodId] = useState('');

  const addGood = (good) => {
    setGoods(prevGoods => [...prevGoods, good])
  }

  const removeGood = (id) => {
    setGoods(goods.filter(good => good.id !== id));
    
    if (id === selectedGoodId) {
      setSelectedGoodId('');
    }
  }

  const goodSelect = (id) => {
    setSelectedGoodId(id);
  }

  const toggleGoodStatus = (id) => {
    setGoods((prevGoods) => {
      const goods = prevGoods.map((good) => {
        if(good.id === id) {
          const changeDate = new Date().toDateString() + ', ' + new Date().toLocaleTimeString();
            
          const changedGood = {
            ...good,
            goodStatus: good.goodStatus === "Have" ? "Run out" : "Have",
            goodStatusChange: changeDate,
          };
          
          return changedGood;
        }

        return good;
      })

      return goods;
    })
  }

  return (
    <div className="App">
      <GoodsList
        goods={goods}
        toggleGoodStatus={toggleGoodStatus}
        removeGood={removeGood}
        goodSelect={goodSelect}
      />
      <div>
        <GoodsForm goods={goods} addGood={addGood}/>
        {selectedGoodId 
          && <GoodDetails 
            {...goods.find(good => good.id === selectedGoodId)}
            removeGood={removeGood}
            toggleGoodStatus={toggleGoodStatus}
          />
        }
      </div>
    </div>
  );
}

export default App;
