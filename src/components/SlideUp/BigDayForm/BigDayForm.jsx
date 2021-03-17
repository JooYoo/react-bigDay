import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { CirclePicker } from 'react-color';
import { useAuth0 } from '@auth0/auth0-react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import BigDayFormStyle from './BigDayForm.module.scss';
import BigDayBall from '../../Grid/BigDayBall/BigDayBall';
import BigDayInfo from '../../Grid/BigDayInfo/BigDayInfo';
import LoginView from '../LoginView/LoginView';

function BigDayForm(props) {
  /* -------------------------------------------------------------------------- */
  /*                               Authentication                               */
  /* -------------------------------------------------------------------------- */

  // setup auth info
  const { user, isAuthenticated, logout } = useAuth0();
  // the only valide user
  const validateUserMail = process.env.REACT_APP_WHO_ARE_U;

  const checkAuth = () => {
    // check if login validate
    let isLoginOk = isAuthenticated ? isAuthenticated : false;
    // check if user validate
    let isUserOk;
    if (user) {
      isUserOk = user.email === validateUserMail ? true : false;
    }

    return isLoginOk && isUserOk;
  };

  /* -------------------------------------------------------------------------- */
  /*                             Preview BigDay Ball                            */
  /* -------------------------------------------------------------------------- */

  let initPreviewBigDay = {
    id: 0,
    title: 'new',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis eleifend.',
    begin: `${moment().format('YYYY.MM.DD')}`,
    end: `${moment().format('YYYY.MM.DD')}`,
    totalDays: 0,
    isHighlight: false,
    themeColor: '#EFEFEF',
  };

  const [previewBigDay, setPreviewBigDay] = useState(initPreviewBigDay);

  /* -------------------------------------------------------------------------- */
  /*                                   Formik                                   */
  /* -------------------------------------------------------------------------- */

  // fields initial values
  const initValues = {
    title: '',
    description: '',
    themeColor: '#f40373',
    dates: {
      startDate: null,
      endDate: null,
    },
  };

  // handle field error
  const validateSchema = Yup.object({
    title: Yup.string().required('Required Title'),
    description: Yup.string().required('Required Descriptiopn'),
    dates: Yup.object().required('Required Dates'),
  });

  // DatePicker: open
  const [openDatePicker, setOpenDatePicker] = useState(null);

  // ColorPicker:
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [themeColor, setThemeColor] = useState('');
  const themeColorStyle = {
    backgroundColor: `${themeColor}`,
  };

  const pickColorComplete = (pickedColor) => {
    // update color toggle
    setThemeColor(pickedColor);
    // close color-pannel
    setOpenColorPicker(false);
    // update preview-ball: color
    previewBigDay.themeColor = pickedColor;
  };

  const onSubmit = (values, onSubmitPorps) => {
    // submit and save values
    console.log('onSubmit:', values);
    // after submit to make sure submitting process is done
    onSubmitPorps.setSubmitting(false);
    // clean up the fields
    onSubmitPorps.resetForm();
  };

  /* ---------------------------- TODO: refactoring --------------------------- */

  const initDate = {
    startDate: null,
    endDate: null,
  };

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
    setColor(pickedColor.hex);
    // close color-pannel
    setShowColorPicker(false);
    // update preview-ball: color
    previewBigDay.themeColor = pickedColor.hex;
  };

  // colorPicker-toggle bg
  const colorPickerToggleStyle = {
    backgroundColor: `${color}`,
  };

  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setDate({ startDate, endDate });
    // update preview-ball: start/endDate
    if (endDate) {
      previewBigDay.begin = moment(startDate).format('YYYY.MM.DD');
      previewBigDay.end = moment(endDate).format('YYYY.MM.DD');
      // update preview-ball: totalDays
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
    let highlightColor = !color ? '#f40373' : color;

    // add infos to new BigDay
    props.addBigDay(
      title,
      description,
      startDateFm,
      endDateFm,
      totalDays,
      highlightColor,
    );

    // FIXME: old form result for debug
    const oldFormResult = {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      themeColor: highlightColor,
    };
    console.table(oldFormResult);

    // rest: title
    setTitle('');

    // reset: description
    setDescription('');

    // reset: dates
    setDate(initDate);

    // reset: color
    setColor('#EFEFEF');

    // reset: preview Ball
    setPreviewBigDay(initPreviewBigDay);
  };

  return (
    <div className={BigDayFormStyle['wrapper']}>
      {checkAuth() ? (
        <>
          <RiLogoutCircleRLine
            size={'2vmin'}
            className={BigDayFormStyle['btn-logout']}
            onClick={() => logout()}
          />

          <Formik
            initialValues={initValues}
            validationSchema={validateSchema}
            onSubmit={onSubmit}
          >
            <Form className={BigDayFormStyle['form-container']}>
              <div className={BigDayFormStyle['form__title']}>Form Title</div>

              <Field
                className={BigDayFormStyle['form__input']}
                placeholder="title..."
                type="text"
                name="title"
              />
              <ErrorMessage name="title" />

              <Field
                className={BigDayFormStyle['form__input']}
                rows="3"
                placeholder="Description"
                as="textarea"
                name="description"
              />
              <ErrorMessage name="description" />

              <Field name="dates">
                {({ form, field }) => {
                  const { setFieldValue } = form;
                  const { value } = field;

                  return (
                    <DateRangePicker
                      displayFormat="YYYY.MM.DD"
                      startDateId="start_date_id"
                      endDateId="end_date_id"
                      startDate={value.startDate}
                      endDate={value.endDate}
                      focusedInput={openDatePicker}
                      onFocusChange={(openDatePicker) =>
                        setOpenDatePicker(openDatePicker)
                      }
                      onDatesChange={(val) => setFieldValue('dates', val)}
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="dates" />

              <button
                type="button"
                className={BigDayFormStyle['form__color-picker__toggle']}
                style={themeColorStyle}
                onClick={() => setOpenColorPicker(!openColorPicker)}
              ></button>
              {openColorPicker && (
                <Field name="themeColor">
                  {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;

                    return (
                      <CirclePicker
                        color={value}
                        onChange={(val) => setFieldValue('themeColor', val.hex)}
                        onChangeComplete={(val) => pickColorComplete(val.hex)}
                      />
                    );
                  }}
                </Field>
              )}

              <button type="submit">submit</button>
            </Form>
          </Formik>

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
              type="button"
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

            <button
              className={BigDayFormStyle['form__btn--submit']}
              type="submit"
            >
              submit
            </button>
          </form>

          <div className={BigDayFormStyle['preview-ball-container']}>
            <BigDayBall bigDay={previewBigDay} isHighlight={false}>
              <BigDayInfo bigDay={previewBigDay} />
            </BigDayBall>
          </div>
        </>
      ) : (
        <LoginView />
      )}
    </div>
  );
}

export default BigDayForm;
