
const Counter3 =() => {
return (
<div>

<br/>
<br/>
  <input 
  type="text" 
  id="title" 
  placeholder="عنوان پست خود را اینجا وارد کنید" 
  style={{
    height: '25px',
    width: '250px',
    border: '1px solid black',
    padding: '10px',
    textAlign:"right",
}}
  
  />
  <br/>
  <br/>
  
  <br/>
  
 
    <input
      type="text"
      id="post"
      placeholder="متن پست خود را اینجا وارد کنید"
      
      style={{
        height: '200px',
        width: '250px',
        border: '1px solid black',
        padding: '10px',
        textAlign:"right",

       
      }}
    />
    
    <br/>
    <br/>

<input type="text" id="tag" placeholder="متن پست خود را اینجا وارد کنید" 
style={{
  textAlign:"right"
}}
/>
<input 
  type="text" 
  id="title" 
  placeholder="عنوان ها "
  style={{
    height: '0px',
    width: '50px',
    border: '1px solid black',
    padding: '10px',
    textAlign:"right"
    
}}
  />
</div>

)

}
export default Counter3;