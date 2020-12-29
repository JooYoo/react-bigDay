import React, { useState } from 'react';
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
    // formate date
    let startDateFm = moment(startDate).format('YYYY-MM-DD');
    let endDateFm = moment(endDate).format('YYYY-MM-DD');

    // add new BigDay
    props.addBigDay(title, startDateFm, endDateFm);

    // after add new BigDay clean up textbox
    setTitle('');

    // avoid after submit refresh
    e.preventDefault();
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
    console.log(moment(startDate).format('YYYY-MM-DD'));
  };

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
          displayFormat="YYYY-MM-DD"
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default BigDayForm;
