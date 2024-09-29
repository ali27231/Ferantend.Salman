import * as React from 'react';
    import FormGroup from '@mui/material/FormGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import Switch from '@mui/material/Switch';    
    const Counter2 =() => {
      return (
        <div>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="آپلود فایل"/>
          {/* <FormControlLabel required control={<Switch />} label="Required" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
        </FormGroup>
        </div>
      );
    }
export default Counter2;