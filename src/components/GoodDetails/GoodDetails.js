import React from "react";
import ClassNames from 'classnames';
import PropTypes from "prop-types";

import './GoodDetails.css'

export const GoodDetails = ({
  goodName,
  id,
  goodPriority,
  goodStatus,
  goodStatusChange,
  toggleGoodStatus,
  removeGood
}) => {
  return (
    <div 
      className={ClassNames({
        'good-details': true,
        'good-details--run-out': goodStatus === 'Run out',
      })}
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
        <label htmlFor="good-details-status">
          <input
            id="good-details-status"
            type="checkbox"
            checked={goodStatus==="Have"}
            onChange={() => toggleGoodStatus(id)}
          />

          &nbsp;Status:&nbsp;
          {goodStatus}
        </label>
      </p>

      {goodStatusChange 
        && <p>
          Last change of status:&nbsp;
          <br/>
          {goodStatusChange}
        </p>
      }

      <button
        type="button"
        onClick={() => removeGood(id)}
      >
        &times;
      </button>

    </div>
  )
};

GoodDetails.proppTypes = {
  goodName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  goodPriority: PropTypes.number.isRequired,
  goodStatus: PropTypes.string.isRequired,
  goodStatusChange: PropTypes.func.isRequired,
  toggleGoodStatus: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
}