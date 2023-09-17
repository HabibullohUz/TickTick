import { DatePicker, Space } from "antd";
import React, { useRef, useState } from "react";
import moment from "moment";

function TodoTask() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [daySpan, setSpanDay] = useState("");
  const inputRef = useRef();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function getWeekdayInMonth(event) {
    let e = event.target.value;

    weekDays.map((weekDay) => {
      if (e.includes(weekDay)) {
        setSpanDay(weekDay);
        inputRef.current.value = "";

        const week = moment().day(weekDay)._d;
        console.log(week);
        setDate("2023-09-25");
      }
    });

    if (e.length >= 5) {
      checkTime(e.slice(-5));
    }
  }

  const onChange = (date, dateString) => {
    console.log(date);
  };

  const checkTime = (time) => {
    if (
      !isNaN(time[0]) &&
      !isNaN(time[1]) &&
      time[2] === ":" &&
      !isNaN(time[3]) &&
      !isNaN(time[4])
    ) {
      setTime(time);
    }
  };

  const catchBackspace = (e) => {
    if (e.code === "Backspace" && inputRef.current.value === "") {
      inputRef.current.value = daySpan;
      setSpanDay("");
    }
  };

  return (
    <div className="todoTask__wrapper">
      <h1>Todo Task</h1>
      <div className="input-container">
        <div className="days">{daySpan}</div>
        <input
          ref={inputRef}
          className="todo_input"
          type="text"
          onChange={getWeekdayInMonth}
          onKeyDown={(e) => catchBackspace(e)}
        />
      </div>

      <Space direction="vertical">
        <DatePicker defaultValue={date} format={"YYYY-MM-DD"} />
        <span>{time}</span>
      </Space>
    </div>
  );
}

export default TodoTask;