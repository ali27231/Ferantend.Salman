// const Counter3 = () => {
//   return (
//     <div>
//       <br />
//       <br />
//       <input
//         type="text"
//         id="title"
//         placeholder="عنوان"
//         style={{
//           height: "25px",
//           width: "250px",
//           border: "1px solid black",
//           padding: "10px",
//           textAlign: "right",
//         }}
//       />
//       <br />
//       <br />
//       <input
//         type="text"
//         id="post"
//         placeholder="متن پست"
//         style={{
//           height: "200px",
//           width: "250px",
//           border: "1px solid black",
//           padding: "10px",
//           textAlign: "right",
//         }}
//       />

//       <br />
//       <br />

     
//     </div>
//   );
// };
// export default Counter3;
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Counter from "./Counter";

const Counter3 = () => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '400px'} }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="onvan" label="عنوان" variant="outlined" style={{
          width: "400px",
         textAlign: "right",
         }} />
      <br />
      <TextField id="post" label="متن پست" variant="outlined" tyle={{
          width: "400px",
         textAlign: "right",
         }}/>
      <br />
      <TextField id="tags" label="تگ ها" variant="outlined" style={{
          width: "200px",textAlign: "right",}}/>
          <Counter/>
    </Box>
  );
}
export default Counter3;