import React, { Component } from 'react'   
import { Form, Input, Button, Image, Divider, Row, Typography, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Login.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default class Login extends Component {
    register = () => {
        window.location.replace("/register")
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <div >
                        <Row justify='center' align='middle'>
                            <img
                                width={200}
                                src={"./iiitb.png"}
                            />
                        </Row>
                        <Row justify='center' align='bottom'>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                // onFinish={onFinish}
                            >
                                <Title className="center_title" level={3}>PE/RE Application System</Title>
                                <Divider plain>Login form</Divider>    
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                    </Button>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" className="login-form-button" onClick={this.register} >
                                    or Register
                                    </Button>
                                </Form.Item>

                                </Form>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}> Created by Ashutosh soni - MT2021026 ©2022</Footer>
            </Layout>
        )
    }
}