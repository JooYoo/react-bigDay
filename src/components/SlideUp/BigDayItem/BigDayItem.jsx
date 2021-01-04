import React from 'react';

function BigDayItem(props) {
  return (
    <div>
      <button onClick={() => props.removeBigDay(props.id)}>X</button>
      {props.id} | {props.bigDay.title} | {props.bigDay.begin} ~
      {props.bigDay.end} | {props.bigDay.restDays} |
      {props.bigDay.highlightColor}
    </div>
  );
}

export default BigDayItem;
