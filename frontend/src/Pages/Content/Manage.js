import { Button, Col, Row, Table } from 'antd';
import React, { Component } from 'react';

export default class Manage extends Component {
    render(){
    let columns = [
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
            title: 'Slots',
            dataIndex: 'slots',
        },
        {
            Title: 'Operation',
            dataIndex: 'operation'
        }
      ];
      
    let data = [
        {
          key: '1',
          project: 'PE/RE Application System',
          type: 'Project Elective',
          slots: 10,
          operation: <div><Button type='primary'>Edit</Button><Button>Remove</Button></div>,
        },
        {
          key: '2',
          project: 'Crosslayer optimization',
          type: 'Research Elective',
          slots: 5,
          operation: <div><Button type='primary'>Edit</Button><Button>Remove</Button></div>,
        },
        {
          key: '3',
          project: 'Backend Management',
          type: 'Project Elective',
          slots: 20,
          operation: <div><Button type='primary'>Edit</Button><Button>Remove</Button></div>,
        },
      ];
    
        return(
          <div>
            <Row justify='center' align='middle'>
                <Col span={24}>
                    <div>
                    <Table columns={columns} dataSource={data} />
                    </div>
                </Col>
            </Row>
            <Row justify='center' align='middle'>
                <Col span={24}>
                    <div>
                    <Button key='add_app' type='primary'>Add New Elective</Button>
                    </div>
                </Col>
            </Row>
          </div>
        )
    }
}