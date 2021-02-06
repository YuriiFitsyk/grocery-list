import React, { useState } from "react";
import { GoodsForm } from './components/GoodsForm';
import { GoodsList } from './components/GoodsList';
import './App.css';

function App() {
  const [goods, setGoods] = useState([]);

  const addGood = (good) => {
    setGoods(prevGoods => [...prevGoods, good])
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

  // onComplete = (id) => {
  //   this.setState((state) => {
  //     const todos = state.todos.map((todo) => {
  //       if (todo.id === id) {
  //         const changedTodo = {
  //           ...todo,
  //           completed: !todo.completed,
  //         };

  //         return changedTodo;
  //       }

  //       return todo;
  //     });

  //     return {
  //       todos,
  //     };
  //   });
  // }

  return (
    <div className="App">
      <GoodsList goods={goods} toggleGoodStatus={toggleGoodStatus}/>

      <GoodsForm goods={goods} addGood={addGood}/>
    </div>
  );
}

export default App;
