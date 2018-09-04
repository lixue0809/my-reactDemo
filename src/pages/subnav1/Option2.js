import React from "react";
import Breadcrumb from "antd/lib/breadcrumb";

export default class Option1 extends React.Component {
  render() {
    return (
      <div className="home-content">
        <h1>这是第二个菜单</h1>
        <Breadcrumb className="home-content-breadcrumb">
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="home-content-data">Bill is a cat.</div>
      </div>
    );
  }
}
