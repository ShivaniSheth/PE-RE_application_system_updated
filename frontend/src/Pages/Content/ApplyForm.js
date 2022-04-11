import React, { Component } from 'react';
import {Button, Input, Form } from 'antd';

export default class ApplyForm extends Component {
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
                {/* <Typography.Text /> */}
                <Input />
              </Form.Item>

              <Form.Item
                name='professor'
                label='Professor'
              >
                {/* <Typography.Text /> */}
                <Input />
              </Form.Item>

              <Form.Item
                name='description'
                label='Description'
              >
                {/* <Typography.Text /> */}
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
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
              <Form.Item>
                  <Button onClick={this.props.onCancelApply}>Cancel</Button>
                </Form.Item>
            </Form>
        )
    }
}