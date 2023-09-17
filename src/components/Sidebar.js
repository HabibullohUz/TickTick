import { CalendarTwoTone, CheckSquareOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';


const App = () => (
  <div className="sidebar__container">
    <Space direction="vertical" size={12} >
      <Space wrap size={16}>
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </Space>
    </Space>

    <CheckSquareOutlined />
    <CalendarTwoTone />
  </div>

);


export default App;