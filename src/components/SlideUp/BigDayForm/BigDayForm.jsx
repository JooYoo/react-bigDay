import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { CirclePicker } from 'react-color';
import * as moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import BigDayFormStyle from './BigDayForm.module.scss';
import BigDayBall from '../../Grid/BigDayBall/BigDayBall';
import BigDayInfo from '../../Grid/BigDayInfo/BigDayInfo';

function BigDayForm(props) {
  const initDate = {
    startDate: null,
    endDate: null,
  };

  // TODO: init day should make sense
  let initPreviewBigDay = {
    id: 0,
    title: 'new ball',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend.',
    begin: '2021.05.01',
    end: '2021.05.28',
    totalDays: 0,
    isHighlight: false,
    themeColor: '#f40373',
  };

  const [previewBigDay, setPreviewBigDay] = useState(initPreviewBigDay);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [{ startDate, endDate }, setDate] = useState(initDate);
  const [focusedInput, setFocusedInput] = useState(null);

  const [color, setColor] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
    // update preview-ball: title
    previewBigDay.title = e.target.value;
  };

  const setDescriptionHandler = (e) => {
    setDescription(e.target.value);
    // update preview-ball: description
    previewBigDay.description = e.target.value;
    // fix minimal width
  };

  const setColorHandler = (pickedColor) => {
    setColor(pickedColor);
    // close color-pannel
    setShowColorPicker(false);
    // update preview-ball: color
    previewBigDay.themeColor = pickedColor.hex;
  };

  // colorPicker-toggle bg
  const colorPickerToggleStyle = {
    backgroundColor: `${color.hex}`,
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
    // update preview-ball: start/endDate
    if (endDate) {
      previewBigDay.begin = moment(startDate).format('YYYY.MM.DD');
      previewBigDay.end = moment(endDate).format('YYYY.MM.DD');
      // update preview-ball: resetDays
      // TODO: totalDays shoulbe calculate between todayDate and endDate
      previewBigDay.totalDays = endDate.diff(startDate, 'days');
    }
  };

  const submitFormHandler = (e) => {
    // avoid after submit refresh
    e.preventDefault();

    // avoid invalid data saving
    if (!startDate || !endDate) {
      return;
    }

    // dateRange: formate date
    let startDateFm = moment(startDate).format('YYYY.MM.DD');
    let endDateFm = moment(endDate).format('YYYY.MM.DD');

    // totalDays: get totalDays
    let totalDays = endDate.diff(startDate, 'days');

    // color: get color
    let highlightColor = !color ? '#f40373' : color.hex;

    // add infos to new BigDay
    props.addBigDay(
      title,
      description,
      startDateFm,
      endDateFm,
      totalDays,
      highlightColor,
    );

    // title: after add new BigDay clean up textbox
    setTitle('');

    // description: after add new BigDay clean up textarea
    setDescription('');

    // dates: after submit clean up
    setDate(initDate);
  };

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

        <button
          className={BigDayFormStyle['form__color-picker__toggle']}
          style={colorPickerToggleStyle}
          onClick={() => setShowColorPicker(!showColorPicker)}
        ></button>

        {showColorPicker && (
          <div className={BigDayFormStyle['form__color-picker']}>
            <CirclePicker
              color={color}
              onChange={(pickedColor) => setColorHandler(pickedColor)}
            />
          </div>
        )}

        <button className={BigDayFormStyle['form__btn--submit']} type="submit">
          submit
        </button>
      </form>

      <div className={BigDayFormStyle['preview-ball-container']}>
        <BigDayBall bigDay={previewBigDay} isHighlight={false}>
          <BigDayInfo bigDay={previewBigDay} />
        </BigDayBall>
      </div>
    </div>
  );
}

export default BigDayForm;
