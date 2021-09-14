import React,{useState} from "react";
import Dashboard from './Dashboard';
import {NavLink,Link} from "react-router-dom";
import { Modal, Button,Table, Tag, Space} from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  Form,
  Select,
  Input,
 
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const columns = [
    {
      title: 'Task id',
      dataIndex: 'Task_id',
      key: 'Task id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Task_name',
      dataIndex: 'Task_name',
      key: 'Task_name',
    },
    {
      title: 'Project',
      dataIndex: 'Project',
      key: 'Project',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Start Task {record.name}</a>
          <a>Remove</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      Task_id: 'TT-001',
      Task_name: 'Task 1',
      Project: 'Java team',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      Task_id: 'TT-002',
      Task_name: 'Task 2',
      Project: 'UI team',
      tags: ['loser'],
    },
    {
      key: '3',
      Task_id: 'TT-003',
      Task_name: 'Task 3',
      Project: 'Python team',
      tags: ['cool', 'teacher'],
    },
  ];
const Home =() =>{
  const user_name = sessionStorage.getItem("first_name");
  const [visible, setVisible] = useState(false);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
    return(
        <><Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Task Tracker</Menu.Item>
            
            <Menu.Item key="3"className="right" ><span >{user_name}</span></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                
                <Menu.Item key="a7" icon={<UserOutlined />}><Link to="./Home" >Home</Link></Menu.Item>
                
                
                <Menu.Item key="a8" icon={<LaptopOutlined />}><Link to="./Todo" >To Do</Link></Menu.Item>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="In Progress">
                
                </SubMenu>
                <SubMenu key="sub4" icon={<NotificationOutlined />} title="Done">
                
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}> 
            <div>
            <Button type="primary" onClick={() => setVisible(true)} className="btn1">
        Create task
      </Button>
      </div>
      
   
      <Table columns={columns} dataSource={data} />
     </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
   
    {/* <PlusCircleOutlined  className="add" /> */}
    
   

    <Modal
        title="Create Task"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <div className="n1">
      <Form.Item
        name="Company"
        label="Company"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a Company">
          <Option value="china">Company1</Option>
          <Option value="usa">Company2</Option>
        </Select>
      </Form.Item>
      </div>
      <div className="n1">
      <Form.Item
        name="project"
        label="project"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a Project">
          <Option value="china">Project1</Option>
          <Option value="usa">Project2</Option>
        </Select>
      </Form.Item>
      </div>
      <div className="n1">
      <Form.Item
        name="Priority"
        label="Priority"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a Priority">
          <Option value="china">Priority1</Option>
          <Option value="usa">Priority2</Option>
        </Select>
      </Form.Item>
      <div className="n1">
      <Form.Item
        name="Taskname"
        label="Taskname"
       
      >
        <Input />
      </Form.Item>
      </div>
      </div>
      </Form>
      </Modal>

 
      
        </>
    )

}
export default Home;