import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import Counter from './Counter';
import Counter1 from "./Counter1";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{
            height: "75px",
          width: "400px",
          padding: "10px",
          textAlign: "right",

        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="عنوان"
      />
      <br />
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{
            height: "350px",
          width: "400px",
          padding: "10px",
          textAlign: "right",

        }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="متن پست"
      />
      <br/>
      <AutoComplete
        options={options}
        style={{
            height: "75px",
          width: "205px",
          padding: "10px",
          textAlign: "right",

        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="تگ ها"
      /> <Counter/>
        <br/>
        <Counter1/>
    </>
  );
};
export default App;