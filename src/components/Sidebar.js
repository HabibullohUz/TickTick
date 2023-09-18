import {
  BellOutlined,
  CalendarTwoTone,
  CheckSquareOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => (
  <div className={styles["sidebar-container"]}>
    <div className={styles["sidebar-top"]}>
      <Space direction="vertical" size={12} className={styles["avatar"]}>
        <Space wrap size={16}>
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
        </Space>
      </Space>

      <CheckSquareOutlined className={styles["react-icon"]} />
      <CalendarTwoTone className={styles["react-icon"]} />
      <SearchOutlined className={styles["react-icon"]} />
    </div>

    <div className={styles["sidebar-bottom"]}>
      <BellOutlined className={styles["react-icon"]} />
      <QuestionCircleOutlined className={styles["react-icon"]} />
    </div>
  </div>
);

export default Sidebar;
