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
import RequiredError from './formControls/errorMessage/RequiredError';

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

  // update: title
  const updatePreviewTitle = (e) => {
    setPreviewBigDay({
      ...previewBigDay,
      title: e.target.value,
    });
  };

  // update: description
  const updatePreviewDesc = (e) => {
    setPreviewBigDay({
      ...previewBigDay,
      description: e.target.value,
    });
  };

  // update: date
  const updatePreviewDate = (dates) => {
    // get raw dates
    const { startDate, endDate } = dates;
    // update preview: endDate, restDays
    if (endDate) {
      // convert dates to string
      const prewStartDate = moment(startDate).format('YYYY.MM.DD');
      const prewEndDate = moment(endDate).format('YYYY.MM.DD');
      const prewRestDays = endDate.diff(startDate, 'days');

      // update preview
      setPreviewBigDay({
        ...previewBigDay,
        begin: prewStartDate,
        end: prewEndDate,
        totalDays: prewRestDays,
      });
    }
  };

  // update: color && set color-toggle color-pannel
  const updatePreviewColor = (pickedColor) => {
    // update color toggle
    setThemeColor(pickedColor);
    // close color-pannel
    setOpenColorPicker(false);
    // update preview-ball: color
    setPreviewBigDay({
      ...previewBigDay,
      themeColor: pickedColor,
    });
  };

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

  // field error
  const validateSchema = Yup.object({
    title: Yup.string().required(' '),
    description: Yup.string().required(' '),
    dates: Yup.object().required(' '), // FIXME: object validation not working
  });

  // DatePicker: toggle
  const [openDatePicker, setOpenDatePicker] = useState(null);

  // ColorPicker
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [themeColor, setThemeColor] = useState('');
  const themeColorStyle = {
    backgroundColor: `${themeColor}`,
  };

  const onSubmit = (values, onSubmitPorps) => {
    // formate dates
    let startDateFm = moment(values.dates.startDate).format('YYYY.MM.DD');
    let endDateFm = moment(values.dates.endDate).format('YYYY.MM.DD');
    let totalDays = values.dates.endDate.diff(values.dates.startDate, 'days');

    //  submit and save values
    props.addBigDay(
      values.title,
      values.description,
      startDateFm,
      endDateFm,
      totalDays,
      values.themeColor,
    );

    // after submit to make sure submitting process is done
    onSubmitPorps.setSubmitting(false);
    // clean up the fields
    onSubmitPorps.resetForm();
    // reset color toggle
    setThemeColor('#EFEFEF');
    // reset preview
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
              <div className={BigDayFormStyle['form__title']}>New BigDay</div>

              <div className={BigDayFormStyle['form__input-container']}>
                <Field
                  className={BigDayFormStyle['form__input']}
                  placeholder="Title"
                  type="text"
                  name="title"
                  onKeyUp={(e) => updatePreviewTitle(e)}
                />
                <ErrorMessage name="title" component={RequiredError} />
              </div>

              <div className={BigDayFormStyle['form__input-container']}>
                <Field
                  className={BigDayFormStyle['form__input']}
                  rows="3"
                  placeholder="Description"
                  as="textarea"
                  name="description"
                  onKeyUp={(e) => updatePreviewDesc(e)}
                />
                <ErrorMessage name="description" component={RequiredError} />
              </div>

              <div className={BigDayFormStyle['form__input-container']}>
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
                        onDatesChange={(val) => {
                          setFieldValue('dates', val);
                          updatePreviewDate(val);
                        }}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="dates" component={RequiredError} />
              </div>

              <button
                type="button"
                className={BigDayFormStyle['form__color-picker__toggle']}
                style={themeColorStyle}
                onClick={() => setOpenColorPicker(!openColorPicker)}
              ></button>
              {openColorPicker && (
                <div className={BigDayFormStyle['form__color-picker']}>
                  <Field name="themeColor">
                    {({ form, field }) => {
                      const { setFieldValue } = form;
                      const { value } = field;

                      return (
                        <CirclePicker
                          color={value}
                          onChange={(val) =>
                            setFieldValue('themeColor', val.hex)
                          }
                          onChangeComplete={(val) =>
                            updatePreviewColor(val.hex)
                          }
                        />
                      );
                    }}
                  </Field>
                </div>
              )}

              <button
                className={BigDayFormStyle['form__btn--submit']}
                type="submit"
              >
                submit
              </button>
            </Form>
          </Formik>

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
