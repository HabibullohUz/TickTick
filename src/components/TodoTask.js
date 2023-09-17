import { DatePicker, Space } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'

function TodoTask() {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')
  const [daySpan, setSpanDay] = useState('')
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  function getWeekdayInMonth(event) {
    let e = event.target.value

    weekDays.map((weekDay) => {
      if (e.includes(weekDay)) {
        setSpanDay(weekDay)
        const week = moment().day(weekDay)._d
        setDate(moment(moment(week).format('YYYY-MM-DD')))
      }
    })

    if (e.length >= 5) {
      checkTime(e.slice(-5))
    }
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const checkTime = (time) => {
    if (!isNaN(time[0]) && !isNaN(time[1]) && time[2] === ":" && !isNaN(time[3]) && !isNaN(time[4])) {
      setTime(time)
    }
  }

  return (
    <div className='todoTask__wrapper'>
      <h1>Todo Task</h1>
      <span>{daySpan}</span>
      <input className='todo_input' type="text" onChange={getWeekdayInMonth} />

      <span >{time}</span>
      <Space direction="vertical">
        <DatePicker onChange={onChange} value={date} format="YYYY-MM-DD" />
      </Space>
    </div>
  )
}

export default TodoTask







// import React, { useState } from 'react';
// import { DatePicker } from 'antd';
// import moment from 'moment';

// const DatePickerExample = () => {
//   const [selectedDate, setSelectedDate] = useState(moment('2023-09-29'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const disabledDate = (current) => {
//     // Bugungi sanani olib olamiz
//     const today = moment();
//     // Hafta kunlarini tartiblangan ro'yhat
//     const weekdays = [1, 2, 3, 4, 5, 6, 0]; // Dushanba - Yakshanba

//     // Agar tanlangan sananing hafta kunidagi indeks weekdays ro'yhatida bo'lmasa, tanlashni o'chiramiz
//     if (!weekdays.includes(current.day())) {
//       return true;
//     }
//     // Bugundan oldinligini tekshirish
//     return current.isBefore(today, 'day');
//   };

//   return (
//     <div>
//       <DatePicker
//         value={selectedDate}
//         onChange={handleDateChange}
//         format="YYYY-MM-DD"
//         disabledDate={disabledDate}
//       />
//       <p>Selected Date: {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'None'}</p>
//     </div>
//   );
// };

// export default DatePickerExample;