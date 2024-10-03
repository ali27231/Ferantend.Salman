import React from 'react';
import { Space, Switch } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="سوال" unCheckedChildren="محتوا" defaultunChecked />
  </Space>
);
export default App;