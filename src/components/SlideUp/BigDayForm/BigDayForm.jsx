import React, { useState } from 'react';

function BigDayForm(props) {
  const [title, setTitle] = useState('');
  const [begin, setBegin] = useState('2020/01/01');
  const [end, setEnd] = useState('2020/12/31');

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setBeginHandler = (e) => {
    setBegin(e.target.value);
  };

  const setEndHandler = (e) => {
    setEnd(e.target.value);
  };

  const submitFormHandler = (e) => {
    // add new BigDay
    props.addBigDay(title, begin, end);

    // after add new BigDay clean up textbox
    setTitle('')

    // avoid after submit refresh
    e.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>title:</label>
        <input type="text" value={title} onChange={(e) => setTitleHandler(e)} />
      </div>
      <div>
        <label>begin:</label>
        <input type="text" value={begin} onChange={(e) => setBeginHandler(e)} />
      </div>
      <div>
        <label>end:</label>
        <input type="text" value={end} onChange={(e) => setEndHandler(e)} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default BigDayForm;
