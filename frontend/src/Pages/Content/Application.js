import { Button, Col, Row, Table } from 'antd';
import React, { Component } from 'react';

export default class Application extends Component {
    render(){
    let columns = [
        {
          title: 'Student Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
            title: 'Project Name',
            dataIndex: 'project',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
          title: 'Type',
          dataIndex: 'type',
        },
        {
            Title: 'Application',
            dataIndex: 'application'
        }
      ];
      
    let data = [
        {
          key: '1',
          name: 'Ashutosh Soni',
          project: 'PE/RE Application System',
          type: 'Project Elective',
          application: <Button type='primary'>View</Button>,
        },
        {
            key: '2',
            name: 'Shivani sheth',
            project: 'Crosslayer optimization',
            type: 'Research Elective',
            application: <Button type='primary'>View</Button>,
        },
        {
          key: '3',
          name: 'Meet Goswami',
          project: 'Backend Management',
          type: 'Project Elective',
          application: <Button type='primary'>View</Button>,
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