import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CategoryList from './CategoryList';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={CategoryList}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="دسته بندی" />}
    />
     <input
        type="text"
        id="tag"
        placeholder="هشتگ ها"
        style={{
          height: "15px",
          width: "250px",
          border: "1px solid black",
          padding: "10px",
          textAlign: "right",
        }}
      />
  );
}