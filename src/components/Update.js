import axios from "axios";
import { useState } from "react";
function Update(){
  const[res1,setRes]=useState(null);
function handleLogin(event){
  alert(document.getElementsByName('un')[0].value)
  event.preventDefault();
  axios.post('http://localhost:8081/update',{
  un:document.getElementsByName('un')[0].value,
  pw:document.getElementsByName('pw')[0].value,
  pwd:document.getElementsByName('pwd')[0].value,
}).then((res=>{
  console.log(res.data)
  setRes(res.data)
}))
}

return(
<div>
<form>
<h1>Update</h1>
Username:<input type="text" name="un"></input><br/><br/>
Existing Password:<input type="password" name="pw"></input><br/><br/>
New Password:<input type="password" name="pwd"></input><br/><br/>
<button onClick={handleLogin}>submit</button><br/><br/>
<p>{res1}</p>
</form>
</div>

  )
}
export default Update;