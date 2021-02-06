import React from "react";
import ClassNames from 'classnames';
import PropTypes from "prop-types";

import "./Good.css";

export const Good = ({ 
  goodName,
  goodPriority,
  goodStatus,
  id,
  toggleGoodStatus,
  removeGood,
  goodSelect
}) => {
  return (
    <li 
      className={ClassNames({
      'good': true,
      'good--run-out': goodStatus === 'Run out',
      })}
      onClick={() => goodSelect(id)}
    >
      <p>
        Name:&nbsp;
        {goodName}
      </p>

      <p>
        Priority:&nbsp;
        {goodPriority}
      </p>

      <p>
        <input
          type="checkbox"
          checked={goodStatus==="Have"}
          onChange={() => toggleGoodStatus(id)}
        />
        
        Status:&nbsp;
        {goodStatus}
      </p>

      <button
        type="button"
        onClick={() => removeGood(id)}
      >
        &times;
      </button>
    </li>
  )
};

Good.proppTypes = {
  goodName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  goodPriority: PropTypes.number.isRequired,
  goodStatus: PropTypes.string.isRequired,
  toggleGoodStatus: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
  goodSelect: PropTypes.func.isRequired,
}