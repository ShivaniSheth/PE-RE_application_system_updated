import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Col, Row, Typography } from 'antd';
import {
    TeamOutlined,
    HomeOutlined,
    ProjectOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

export default class Home extends Component {
    state = {
        collapsed: false,
      };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    logout = () => {
        window.location.replace("/login")
    }

    render() {
        const { collapsed } = this.state;
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header">
                    <div>
                        <Row align='middle'>
                            <Col span={14} push={8}>
                                <Title style={{color: 'white'}} level={2}>
                                    PE/RE Application System
                                </Title>
                            </Col>
                            <Col span={8} pull={14}>
                                <img
                                    width={75}
                                    src={"../../iiitb.png"}
                                />
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div>
                            <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<HomeOutlined />}>
                                Home
                                </Menu.Item>
                                <Menu.Item key="2" icon={<ProjectOutlined />}>
                                Project Electives
                                </Menu.Item>
                                <Menu.Item key="3" icon={<ProjectOutlined />}>
                                Research Electives
                                </Menu.Item>
                                <Menu.Item key="4" icon={<TeamOutlined />}>
                                Faculty
                                </Menu.Item>
                                <SubMenu icon={<SettingOutlined />} title="Settings">
                                    <Menu.Item key="5">Profile</Menu.Item>
                                    <Menu.Item key="6" onClick={this.logout}>Logout</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Sider>
                </Layout>
            </Layout>
        )
    }
}