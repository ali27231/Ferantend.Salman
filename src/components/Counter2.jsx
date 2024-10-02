import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const Counter2 = () => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label=""
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}
        
        />
      </FormGroup>
    </div>
    );
  };
export default Counter2;
