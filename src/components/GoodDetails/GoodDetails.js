import React, {useState} from "react";
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
        <input
          type="checkbox"
          checked={goodStatus==="Have"}
          onChange={() => toggleGoodStatus(id)}
        />

        &nbsp;Status:&nbsp;
        {goodStatus}
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
} 