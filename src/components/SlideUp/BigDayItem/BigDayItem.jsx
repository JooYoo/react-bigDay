import React from 'react';

function BigDayItem(props) {
  return (
    <div>
      {props.id} | {props.bigDay.title} | {props.bigDay.begin} |
      {props.bigDay.end}
      <button onClick={() => props.removeBigDay(props.id)}>X</button>
    </div>
  );
}

export default BigDayItem;
