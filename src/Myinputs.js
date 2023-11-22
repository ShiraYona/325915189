
import React,{useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Myinputs(){

const navigate = useNavigate()

const helpfunc=(i)=>{
    
  navigate('/getdata', {state:i})

}


const start=<input placeholder='enter start date'></input>
const end=<input placeholder='enter end date'></input>
    return (
        <div>      
    
   {start}
   {end}

   <button onClick={()=>{helpfunc({start,end})}}>formybasket</button> 


</div>
      )
}

export default Myinputs