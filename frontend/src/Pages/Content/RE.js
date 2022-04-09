import { Col, Row, Table, Button, Input } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component, useState } from 'react';

const { Search } = Input;
let cols = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
      title: 'Professor',
      dataIndex: 'professor',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
      title: 'Slots Available',
      dataIndex: 'slots',
  },
  {
    title: 'Apply',
    dataIndex: 'apply',
  },
];

let projs = [
  {
    key: '1',
    name: 'PE/RE Application System',
    professor: "ABC",
    description: "Hello world",
    slots: 10,
    apply: <Button type='primary'>apply</Button>
  },
  {
      key: '2',
      name: 'Health care management',
      professor: "sdfsdf",
      description: "Hello world",
      slots: 4,
      apply: <Button type='primary'>apply</Button>
  },
];

export default class RE extends Component {
  state = {
    columns: cols,
    projects: projs,
    filtered: projs,
    count: "",
  };

  onSearch = (value) => {
    let data = this.state.projects;
    
    if (value.length === 0) {
      this.setState({filtered: data})
      return;
    }
    let searchLower = value.toLowerCase();
    let filtered_projects = data.filter((item) => {
      console.log(item.professor)
      if (item.professor.toLowerCase().includes(searchLower)) {
        return true;
      }
      return false;
    });
    this.setState({filtered: filtered_projects})
  };

  onSearchChange = (e) => {
    if (e.target.value.length === 0) {
      this.onSearch("");
    }
  };

  render(){   
    const { count, columns, projects, filtered } = this.state;
    console.log(projects)
    console.log(filtered)

    return(
      <Layout>
        <Header style={{backgroundColor: 'whitesmoke'}}>
          <Search
            placeholder="Search by Professor Name"
            allowClear
            style={{ width: "80%", marginTop: "15px", marginLeft: "8%" }}
            onSearch={this.onSearch}
            name="professorSearch"
            onChange={this.onSearchChange}
          />
        </Header>
        <Content>
          <Table columns={columns} dataSource={filtered} />
        </Content>
      </Layout>
    )
  }
}