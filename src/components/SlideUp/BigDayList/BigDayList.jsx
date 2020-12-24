import React, {useState}  from 'react'

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

    let bigDays = bigDayList.map((bigDay, index) => (
        <div key={index}>{bigDay.title}</div>
    ))

    return (
        <div>
            {bigDays}
        </div>
    )
}

export default BigDayList
