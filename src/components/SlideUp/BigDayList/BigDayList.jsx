import React, {useState}  from 'react'
import BigDayItem from '../BigDayItem/BigDayItem';
import BigDayForm from '../BigDayForm/BigDayForm';

function BigDayList() {
    const initBigDayList = [
        {
            id: 0,
            title: 'Zelda release',
            begin: '2020/12/12',
            end: '2021/05/01'
        },
        {
            id: 1,
            title: 'Borderlands release',
            begin: '2020/12/12',
            end: '2021/05/01'
        },
        {
            id: 2,
            title: 'Mario release',
            begin: '2020/12/12',
            end: '2021/05/01'
        }
    ]

    const [bigDayList, setbigDayList] = useState(initBigDayList);

    const addBigDay = (title, begin, end) =>{
        const newBigDayList = [...bigDayList, {
            title: title,
            begin: begin,
            end: end
        }]

        setbigDayList(newBigDayList);
    }

    let bigDays = bigDayList.map((bigDay, index) => (
        <BigDayItem key={index} id={index} bigDay={bigDay}/>
    ))

    return (
        <div>
            <BigDayForm addBigDay={addBigDay}/>
            <hr/>
            {bigDays}
        </div>
    )
}

export default BigDayList
