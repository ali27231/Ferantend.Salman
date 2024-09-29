
const Counter3 =() => {
return (
<div>

<br/>
<br/>
  <input 
  type="text" 
  id="title" 
  placeholder="عنوان"
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
    <input
      type="text"
      id="post"
      placeholder="متن پست"
      
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

<input type="text" id="tag" placeholder="هشتگ ها" 
style={{
        height: '15px',
        width: '250px',
        border: '1px solid black',
        padding: '10px',
        textAlign:"right",
  
}}

 />
 
</div>

)

}
export default Counter3;