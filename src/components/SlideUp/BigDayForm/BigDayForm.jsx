import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

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
    // add new BigDay
    props.addBigDay(title, String(startDate._d), String(endDate._d));

    // after add new BigDay clean up textbox
    setTitle('');

    // avoid after submit refresh
    e.preventDefault();
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
    console.log(startDate._d);
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
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            onDatesChangeHandler({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default BigDayForm;
