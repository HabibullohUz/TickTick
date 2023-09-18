import React, { useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";
import cx from "classnames";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import styles from "./TodoTask.module.css";

function TodoTask({ todos, onAddTodo, onToggle }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [daySpan, setSpanDay] = useState("");
  const [ourSpan, setOurSpan] = useState("");
  const [importantSpan, setImportantSpan] = useState("");

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const importants = ["!High", "!Medium", "!Low"];

  const checkTime = (time) => {
    if (
      !isNaN(time[0]) &&
      !isNaN(time[1]) &&
      time[2] === ":" &&
      !isNaN(time[3]) &&
      !isNaN(time[4])
    ) {
      setTime(time);
      setOurSpan(time);
      setTodoTitle("");
    }
  };

  const catchBackspace = (e) => {
    if (e.code === "Backspace" && todoTitle === "") {
      if (importantSpan) {
        setTodoTitle(importantSpan);
        setImportantSpan("");
      }
      if (ourSpan) {
        setTodoTitle(ourSpan);
        setOurSpan("");
      }
      if (daySpan) {
        setTodoTitle(daySpan);
        setSpanDay("");
      }

      e.target.placeholder = "+ add task to 'Inbox', press inter to save";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      1 > todoTitle.length ||
      todoTitle === "  " ||
      todoTitle === "   " ||
      todoTitle === "    "
    )
      return;

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      isHigh: importantSpan.toLowerCase() === "!high",
      isMedium: importantSpan.toLowerCase() === "!medium",
      isLow: importantSpan.toLowerCase() === "!low",
      todoDate: daySpan,
      time: time ? time : date.toDateString(),
      importantSpan,
    };
    console.log(daySpan.toLowerCase() === "!!!high");

    onAddTodo(newTodo);
    setTodoTitle("");
    setSpanDay("");
    setOurSpan("");
    setImportantSpan("");
    setDate(new Date());
    setTime("");
  };

  function getWeekdayInMonth(event) {
    let e = event.target.value;

    setTodoTitle(e);
    weekDays.map((weekDay) => {
      if (e.toLowerCase().includes(weekDay.toLowerCase())) {
        setSpanDay(weekDay);
        setTodoTitle("");
        event.target.placeholder = "";
        const week = moment().day(weekDay)._d;
        setDate(week);
      }
    });

    importants.map((important) => {
      if (e.toLowerCase().includes(important.toLowerCase())) {
        setImportantSpan(important);

        setTodoTitle("");
        event.target.placeholder = "";
        const week = moment().day(important)._d;
        setDate(week);
      }
    });

    if (e.length >= 5) {
      checkTime(e.slice(-5));
    }
  }

  return (
    <div className={styles["todoTask-wrapper"]}>
      <h1>Todo Task</h1>

      <div className={styles["input-container"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <div className={styles["days"]}>{`${daySpan}`} </div>
          {ourSpan && <div className={styles["ours"]}>&nbsp; {ourSpan} </div>}
          {importantSpan && (
            <div className={styles["ours"]}>&nbsp; {importantSpan} </div>
          )}
          <input
            value={todoTitle}
            className={styles["todo-input"]}
            type="text"
            onChange={getWeekdayInMonth}
            onKeyDown={(e) => catchBackspace(e)}
            placeholder="+ add task to 'Inbox', press inter to save"
          />
        </form>

        <DatePicker
          value={date}
          format="dd-MM-y"
          onChange={(value) => console.log("New date is: ", setDate(value))}
          onFocus={(event) => console.log("Focused input: ", event.target.name)}
          clearIcon={null}
          className="date-picker"
        />
        <p> {time && `, ${time}`}</p>
      </div>

      <ul className={styles["todo-list"]}>
        {todos.map(
          ({
            title,
            id,
            todoDate,
            time,
            isCompleted,
            isLow,
            isHigh,
            isMedium,
            importantSpan,
          }) => (
            <li
              style={{
                background:
                  (isLow && !isMedium && !isHigh && "#ECF1FF") ||
                  (!isLow && isMedium && !isHigh && "#FFFAEA") ||
                  (!isLow && !isMedium && isHigh && "#FDECEC") ||
                  (isCompleted && "white"),
                border:
                  (isLow && !isMedium && !isHigh && "1px solid #4772F9") ||
                  (!isLow && isMedium && !isHigh && "1px solid #FFC817") ||
                  (!isLow && !isMedium && isHigh && "1px solid #E2423C"),
              }}
              className={cx(
                styles["todo-item"],
                `${isCompleted && styles.completed}`
              )}
              key={id}
            >
              <div className={styles.todo}>
                <div className={styles["box-info"]}>
                  <input
                    type="checkbox"
                    value={isCompleted}
                    checked={isCompleted}
                    onChange={() => onToggle(id)}
                  />
                  <span style={{ color: isCompleted && "#d1d1d1" }}>
                    {title}
                  </span>
                </div>

                <div className={styles["todo-date"]}>
                  <span style={{ color: isCompleted && "#d1d1d1" }}>
                    {todoDate}{" "}
                  </span>
                  <span style={{ color: isCompleted && "#d1d1d1" }}>
                    {time}
                  </span>
                  <span style={{ color: isCompleted && "#d1d1d1" }}>
                    {" "}
                    {importantSpan}
                  </span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default TodoTask;
