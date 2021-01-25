import React, { useState, useRef } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';
import BigDayFormStyle from './BigDayForm.module.scss';

function BigDayForm(props) {
  const initDate = {
    startDate: null,
    endDate: null,
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [{ startDate, endDate }, setDate] = useState(initDate);
  const [focusedInput, setFocusedInput] = useState(null);

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitFormHandler = (e) => {
    // avoid after submit refresh
    e.preventDefault();

    // title: after add new BigDay clean up textbox
    setTitle('');

    // description: after add new BigDay clean up textarea
    setDescription('');

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
    props.addBigDay(
      title,
      description,
      startDateFm,
      endDateFm,
      restDays,
      highlightColor,
    );
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
  };

  const colorRef = useRef(null);

  return (
    <div className={BigDayFormStyle['wrapper']}>
      <form
        className={BigDayFormStyle['form-container']}
        onSubmit={submitFormHandler}
      >
        <div className={BigDayFormStyle['form__title']}>Form Title</div>
        <div className={BigDayFormStyle['form__input-container']}>
          <input
            className={BigDayFormStyle['form__input']}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitleHandler(e)}
          />
        </div>
        <div className={BigDayFormStyle['form__input-container']}>
          <textarea
            className={BigDayFormStyle['form__input']}
            placeholder="Description"
            cols="5"
            rows="3"
            value={description}
            onChange={(e) => setDescriptionHandler(e)}
          ></textarea>
        </div>
        <div className={BigDayFormStyle['form__input-container']}>
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

        <div className={BigDayFormStyle['form__color-picker']} ref={colorRef}>
          <input name="color" type="radio" value="red" />
          <input name="color" type="radio" value="blue" />
          <input name="color" type="radio" value="green" />
        </div>

        <button className={BigDayFormStyle['form__btn--submit']} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default BigDayForm;
