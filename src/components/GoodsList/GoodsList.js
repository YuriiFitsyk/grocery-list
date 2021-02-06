import React, {useState} from "react";
import PropTypes from "prop-types";

import { Good } from "../Good";

import "./GoodsList.css";

export const GoodsList = ({ goods, toggleGoodStatus }) => {
  const [filter, setFilter] = useState('All')

  const filteredGoods = goods.filter(good => filter !== "All" 
    ? good.goodStatus === filter 
    : good
  )

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

      <ul>
        {filteredGoods.map(good => <Good {...good} toggleGoodStatus={toggleGoodStatus} />)}
      </ul>
    </div>
  )
};

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
};