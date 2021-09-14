import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const Dashboard =()=>{
    return(
        <>
        <div className="back">
        <Avatar size={94} icon={<UserOutlined />} />
        <h2>Welcome to Task Traker</h2>
        <p>Create,view and delete task easy</p>
        </div>
        </>
    )
}
export default Dashboard;
