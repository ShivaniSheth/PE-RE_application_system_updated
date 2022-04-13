import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Col, Row, Typography } from 'antd';
import {
    TeamOutlined,
    HomeOutlined,
    ProjectOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Feed from '../Content/Feed'
import PE from '../Content/PE'
import RE from '../Content/RE'
import Faculty from '../Content/Faculty';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

export default class Home extends Component {
    state = {
        collapsed: false,
        selected_tab: "",
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    logout = () => {
        window.location.replace("/login")
    };

    onTabChange = (e) => {
        this.setState({
            selected_tab: e.key,
        });
    };

    render() {
        let renderTab = <Feed />;
        const { selected_tab, collapsed } = this.state;
        switch (selected_tab) {
        case "home":
            renderTab = <Feed />;
            break;
        case "pe":
            renderTab = <PE {...this}></PE>;
            break;
        case "re":
            renderTab = <RE {...this}></RE>;
            break;
        case "faculty":
            renderTab = <Faculty {...this}></Faculty>;
            break;
        default:
            renderTab = <Feed />;
            break;
        }
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" style={{textAlign: 'center', marginLeft: '-200px'}}>
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
                            <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline" defaultSelectedKeys={[this.selected_tab]}>
                                <Menu.Item key="home" icon={<HomeOutlined />} onClick={(e) => {this.onTabChange(e)}}>
                                Home
                                </Menu.Item>
                                <Menu.Item key="pe" icon={<ProjectOutlined />} onClick={(e) => {this.onTabChange(e)}}>
                                Project Electives
                                </Menu.Item>
                                <Menu.Item key="re" icon={<ProjectOutlined />} onClick={(e) => {this.onTabChange(e)}}>
                                Research Electives
                                </Menu.Item>
                                <Menu.Item key="faculty" icon={<TeamOutlined />} onClick={(e) => {this.onTabChange(e)}}>
                                Faculty
                                </Menu.Item>
                                <SubMenu icon={<SettingOutlined />} title="Settings">
                                    <Menu.Item key="logout" onClick={this.logout}>Logout</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Sider>
                    <Content>
                        {renderTab}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}