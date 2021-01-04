import React, { useState, useRef } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

function BigDayForm(props) {
  const initDate = {
    startDate: null,
    endDate: null,
  };

  const [title, setTitle] = useState('');
  const [{ startDate, endDate }, setDate] = useState(initDate);
  const [focusedInput, setFocusedInput] = useState(null);

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitFormHandler = (e) => {
    // avoid after submit refresh
    e.preventDefault();

    // title: after add new BigDay clean up textbox
    setTitle('');

    // dateRange: formate date
    let startDateFm = moment(startDate).format('YYYY.MM.DD');
    let endDateFm = moment(endDate).format('YYYY.MM.DD');

    // restDay: get rest days
    let restDays = endDate.diff(startDate, 'days');

    // color: get color
    let highlightColor = colorRef.current.querySelectorAll(
      'input[name="color"]:checked',
    )[0].value;

    // add infos to new BigDay
    props.addBigDay(title, startDateFm, endDateFm, restDays, highlightColor);
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
  };

  const colorRef = useRef(null);

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>title:</label>
        <input type="text" value={title} onChange={(e) => setTitleHandler(e)} />
      </div>
      <div>
        <label> Date Range: </label>
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            onDatesChangeHandler({ startDate, endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          displayFormat="YYYY.MM.DD"
        />
      </div>

      <div ref={colorRef}>
        <input name="color" type="radio" value="red" />
        <input name="color" type="radio" value="blue" />
        <input name="color" type="radio" value="green" />
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default BigDayForm;
