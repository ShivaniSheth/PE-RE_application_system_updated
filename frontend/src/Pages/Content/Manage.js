import { Form, Button, Col, Row, Table, Modal, Input, Cascader } from 'antd';
import React, { Component } from 'react';

const types = [
  {
    value: 'project_elective',
    label: 'Project Elective',
  },
  {
    value: 'research_elective',
    label: 'Research Elective',
  }
];

const columns = [
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

const data = [
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

export default class Manage extends Component {
  state ={
    add_project: false,
  }

  handleAddProject = () => {
    this.setState({add_project: true})
  }

    render(){
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
                    <Button key='add_app' type='primary' onClick={this.handleAddProject}>Add New Elective</Button>
                    </div>
                </Col>
            </Row>
            <Modal
              visible={this.state.add_project}
              title="Add Elective"
              footer={null}
            >
              <Form layout='vertical'>
                <Form.Item
                  name='project_name'
                  label='Project Name'
                  rules={[
                    {
                      required: true,
                      message: "Project Name is required!"
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name='type'
                  label='Type'
                  rules={[
                    {
                      type: 'array',
                      required: true,
                      message: "Project Name is required!"
                    },
                  ]}
                >
                  <Cascader options={types}/>
                </Form.Item>
                <Form.Item
                  name='description'
                  label='Description'
                  rules={[
                    {
                      type:'string',
                      required:false,
                      message:"Description of the elective"
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name='slots'
                  label='Slots'
                  rules={[
                    {
                      type:'integer',
                      required:true,
                      message:"Total number available slots"
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type='primary'>Submit</Button>
                </Form.Item>
                <Form.Item>
                  <Button onClick={() => { this.setState({ add_project: false }) }}>Cancel</Button>
                </Form.Item>
              </Form>

            </Modal>
          </div>
        )
    }
}