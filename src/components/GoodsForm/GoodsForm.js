import React, {useState} from "react";
import PropTypes from "prop-types";

import "./GoodsForm.css";


export const GoodsForm = ({ addGood }) => {
  const [goodName, setGoodName] = useState('');
  const [goodPriority, setGoodPriority] = useState(1);
  const [goodStatus, setGoodStatus] = useState('Have');
  const [goodStatusChange, setGoodStatusChange] = useState('');
  

  return (
    <form 
      className="goods-form"
      onSubmit={(e) => {
        e.preventDefault();

        addGood({
          goodName,
          goodPriority,
          goodStatus,
          goodStatusChange,
        });

        setGoodName('');
        setGoodPriority(1);
        setGoodStatus('Have');
        setGoodStatusChange('');
      }}
    >
      Add your good

      <label htmlFor="good-name">
        Name:&nbsp;

        <input
          id="good-name"
          placeholder="Good name"
          value={goodName}
          onChange={(e) => setGoodName(e.target.value)}
        />
      </label>

      <label htmlFor="good-priority">
        Priority:&nbsp;

        <select
          id="good-priority"
          value={goodPriority}
          onChange={(e) => setGoodPriority(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <label htmlFor="good-status">
        Status:&nbsp;

        <select
          id="good-status"
          value={goodStatus}
          onChange={(e) => {
            setGoodStatus(e.target.value);
            const changeDate = new Date();
            setGoodStatusChange(
              changeDate.toDateString() 
              + ', ' 
              + changeDate.toLocaleTimeString()
            );
          }}
        >
          <option value="Have">Have</option>
          <option value="Run out">Run out</option>
        </select>
      </label>

      <button type="submit">
        Add a good
      </button>
    </form>
  )
};

GoodsForm.propTypes = {
  addGood: PropTypes.func.isRequired,
}