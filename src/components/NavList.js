import React from "react";
import styles from "./NavList.module.css";
import {
  CalendarOutlined,
  CheckSquareOutlined,
  CopyOutlined,
  DeleteOutlined,
  FileDoneOutlined,
  RightOutlined,
} from "@ant-design/icons";

function NavList() {
  return (
    <div className={styles["navlist-container"]}>
      <div className={styles[("navlist-top", "btn-wrapper")]}>
        <button className={styles["btn"]}>
          <div>
            <CopyOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <CalendarOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <CalendarOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <CalendarOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <CalendarOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <CalendarOutlined /> <span>Welcome</span>
          </div>{" "}
          <span>1</span>
        </button>
      </div>

      <div className={styles.line}></div>

      <div className={styles[("navlist-between", "btn-wrapper")]}>
        <button className={styles["btn"]}>
          {" "}
          <div>
            <RightOutlined />
            <span>Lists</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          {" "}
          <div>
            <RightOutlined /> <span>Tags</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          {" "}
          <div>
            <RightOutlined /> <span>Filters</span>
          </div>{" "}
          <span>1</span>
        </button>
      </div>

      <div className={styles.line}></div>

      <div className={styles[("navlist-bottom", "btn-wrapper")]}>
        <button className={styles["btn"]}>
          <div>
            <CheckSquareOutlined /> <span>Completed</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <DeleteOutlined /> <span>Trash</span>
          </div>{" "}
          <span>1</span>
        </button>
        <button className={styles["btn"]}>
          <div>
            <FileDoneOutlined />
            <span>Summary</span>
          </div>{" "}
          <span>1</span>
        </button>
      </div>
    </div>
  );
}

export default NavList;
