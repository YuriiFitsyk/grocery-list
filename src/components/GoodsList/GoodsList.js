import React, {useState} from "react";
import PropTypes from "prop-types";

import { Good } from "../Good";

import "./GoodsList.css";

export const GoodsList = ({ goods, toggleGoodStatus, removeGood, goodSelect }) => {
  const [filter, setFilter] = useState('All')

  let filteredGoods = goods.filter(good => filter !== "All" 
    ? good.goodStatus === filter 
    : good
  )

  filteredGoods = [...filteredGoods].sort((a, b) => {
    if(a.goodPriority - b.goodPriority > 0) {
      return 1;
    } else if (a.goodPriority - b.goodPriority === 0) {
      if (a.goodName.localeCompare(b.goodName) > 0) {
        return 1;
      } else if (a.goodName.localeCompare(b.goodName) === 0) {
        return 0; 
      } else {
        return -1;
      }
    } else {
      return -1
    }
  })

  return (
    <div className="goods-list">
      <h2 className="goods-list__title">
        Grocery List
      </h2>
      
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Have">Have</option>
        <option value="Run out">Run out</option>
      </select>

      <ul className="goods-list__list">
        {filteredGoods.map(good => (
          <Good
            key={good.id}
            {...good}
            toggleGoodStatus={toggleGoodStatus}
            removeGood={removeGood}
            goodSelect={goodSelect}
          />
        ))}
      </ul>
    </div>
  )
};

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
  toggleGoodStatus: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
  goodSelect: PropTypes.func.isRequired,
};