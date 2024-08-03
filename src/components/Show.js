import { useState } from "react";
import axios from "axios";

function Show(){
const[res,setRes]=useState(null);
if(res==null)
{
  axios.get('http://localhost:8081/showall',{

  }).then((respon)=>{
    console.log(respon.data);
    setRes(respon.data);
  })
}




  return(
    <div>
      {JSON.stringify(res)}
    </div>
  )
}


export default Show;
