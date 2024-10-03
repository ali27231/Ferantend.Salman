import React from 'react';
import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const App = () => (
  <Select
    showSearch
    placeholder="انتخاب دسته بندی"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    style={{
            height: "55px",
          width: "180px",
          textAlign: "right",

        }}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);
export default App;