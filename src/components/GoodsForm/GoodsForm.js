import React, {useState} from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./GoodsForm.css";


export const GoodsForm = ({ goods, addGood }) => {
  const [goodName, setGoodName] = useState('');
  const [goodNameValid, setgoodNameValid] = useState(true);
  const [goodPriority, setGoodPriority] = useState(1);
  const [goodStatus, setGoodStatus] = useState('Have');

  return (
    <form 
      className={ClassNames({
        "goods-form": true,
        "goods-form--error": !goodNameValid,
      })}
      onSubmit={(e) => {
        e.preventDefault();

        if (goodName.trim() === '') {
          setgoodNameValid(false);
          return;
        }

        addGood({
          id: goods.length === 0 
            ? 1 
            : goods[goods.length - 1].id + 1,
          goodName,
          goodPriority,
          goodStatus,
          goodStatusChange: '',
          
        });

        setGoodName('');
        setGoodPriority(1);
        setGoodStatus('Have');
      }}
    >
      Add your good

      <label htmlFor="good-name">
        Name:&nbsp;

        <input
          id="good-name"
          placeholder="Good name"
          value={goodName}
          onChange={(e) => {
            setgoodNameValid(true);
            setGoodName(e.target.value)
          }}
        />        
      </label>

      {!goodNameValid 
        && <div className="name-error">
          Enter valid name, please.
        </div>
      }

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
  goods: PropTypes.array.isRequired,
  addGood: PropTypes.func.isRequired,
}