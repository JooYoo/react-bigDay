import React from 'react'

function BigDayItem(props) {
    return (
        <div>
           {props.id} | {props.bigDay.title} | {props.bigDay.begin} | {props.bigDay.end}
        </div>
    )
}

export default BigDayItem
