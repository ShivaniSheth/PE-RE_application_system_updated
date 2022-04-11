import React, { Component } from 'react';
import {Button, Input, Form } from 'antd';

export default class ViewApp extends Component {
    componentDidMount = () => {
        this.props.editModalForm();
    }

    componentDidUpdate = () => {
      this.props.editModalForm();
    }

    render() {
        return(
            <Form 
                layout='vertical' 
                ref={this.props.editFormRef} 
            >
              <Form.Item
                name='name'
                label='Name'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='type'
                label='Type'
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='skills'
                label='Skills'
                rules={[
                  {
                    required: false,
                    message: "Enter your skills"
                  }
                ]}
              >
                <Input style={{height:'150px'}}/>
              </Form.Item>

              <Form.Item
                name='experience'
                label='Experience'
              >
                <Input style={{height:'150px'}}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Accept</Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Reject</Button>
              </Form.Item>
              <Form.Item>
                  <Button onClick={this.props.onCancelView}>Cancel</Button>
                </Form.Item>
            </Form>
        )
    }
}