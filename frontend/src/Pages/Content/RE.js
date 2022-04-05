import { Col, Row, Table, Breadcrumb } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { Component } from 'react';

const { Header, Content, Sider } = Layout;

export default class RE extends Component {
    render(){
    let columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
            title: 'Professor',
            dataIndex: 'professor',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
          title: 'Description',
          dataIndex: 'description',
        },
        {
            title: 'Slots Available',
            dataIndex: 'slots',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
      ];
      
    let data = [
        {
          key: '1',
          name: 'PE/RE Application System',
          professor: "ABC",
          description: "Hello world",
          slots: 10,
        },
      ];
    
        return(
            <Row justify='center' align='middle'>
                <Col span={24}>
                    <div>
                    <Table columns={columns} dataSource={data} />
                    </div>
                </Col>
            </Row>
        )
    }
}