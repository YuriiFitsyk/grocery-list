import React, {useState} from "react";
import PropTypes from "prop-types";

import "./Good.css";

export const Good = ({ goodName, goodPriority, goodStatus, id , toggleGoodStatus}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={goodStatus==="Have"}
        onChange={() => toggleGoodStatus(id)}
      />
      <br/>
      Name:&nbsp; {goodName}
      <br/>
      Priority:&nbsp; {goodPriority}
      <br/>
      Status:&nbsp; {goodStatus}
    </li>
  )
};