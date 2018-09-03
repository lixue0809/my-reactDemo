import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';

export default class ContentDemoPage extends React.Component {
  render() {
    return (
      <div className="home-content">
        <Breadcrumb className="home-content-breadcrumb">
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="home-content-data">Bill is a cat.</div>
      </div>
    );
  }
}