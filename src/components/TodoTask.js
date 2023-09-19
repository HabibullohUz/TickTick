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
    { en: "monday", uz: "Dushanba" },
    { en: "tuesday", uz: "Seshanba" },
    { en: "wednesday", uz: "Chorshanba" },
    { en: "thursday", uz: "Payshanba" },
    { en: "friday", uz: "Juma" },
    { en: "saturday", uz: "Shanba" },
    { en: "sunday", uz: "Yakshanba" },
  ];
  const importants = ["!Muhim", "!O'rta", "!Oddiy"];

  const days = [
    { en: -1, uz: "Kecha" },
    { en: 1, uz: "Ertaga" },
    { en: 0, uz: "bugun" },
  ];

  function getWeekdayInMonth(event) {
    let e = event.target.value;
    console.log(moment().add(0, "days"));
    setTodoTitle(e);
    weekDays.map(({ uz, en }) => {
      if (e.toLowerCase().trim() === uz.toLowerCase()) {
        setSpanDay(uz);
        setTodoTitle("");
        event.target.placeholder = "";
        const week = moment().day(en)._d;
        setDate(week);
      }
    });

    days.map(({ uz, en }) => {
      if (e.toLowerCase().includes(uz.toLowerCase())) {
        setSpanDay(uz);
        setTodoTitle("");
        event.target.placeholder = "";
        const week = moment().add(en, "days")._d;
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

  const checkTime = (time) => {
    if (
      /^[0-9]{2}:[0-9]{2}$/.test(time)
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
      } else if (ourSpan) {
        setTodoTitle(ourSpan);
        setOurSpan("");
      } else if (daySpan) {
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
      todoTitle === " " ||
      todoTitle === "  " ||
      todoTitle === "   "
    )
      return;

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      isHigh: importantSpan.toLowerCase() === "!muhim",
      isMedium: importantSpan.toLowerCase() === "!o'rta",
      isLow: importantSpan.toLowerCase() === "!oddiy",
      todoDate: daySpan,
      time: time,
      importantSpan,
    };

    onAddTodo(newTodo);
    setTodoTitle("");
    setSpanDay("");
    setOurSpan("");
    setImportantSpan("");
    setDate(new Date());
    setTime("");
  };

  return (
    <div className={styles["todoTask-wrapper"]}>
      <h1>Todo Task</h1>

      <div className={styles["input-container"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <span className={styles["days"]}>{`${daySpan}`}</span>
          {ourSpan && <span className={styles["ours"]}>&nbsp; {ourSpan} </span>}
          {importantSpan && (
            <span className={styles["ours"]}>&nbsp; {importantSpan} </span>
          )}
          <input
            value={todoTitle}
            className={styles["todo-input"]}
            type="text"
            onChange={getWeekdayInMonth}
            onKeyDown={(e) => catchBackspace(e)}
            placeholder="+ 'Inbox' ga task qo'shing, saqlash uchun inter bosing !"
          />
        </form>

        <DatePicker
          value={date}
          clearIcon={null}
          className="date-picker"
          format="dd-MM-y"
        />
        <p className={styles.showInputTime}> {time && `${time}`}</p>
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
    </div >
  );
}

export default TodoTask;