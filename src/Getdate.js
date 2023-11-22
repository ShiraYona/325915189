import React,{useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import Alone from "./Alone";




function GetDate(){

const [datam,setData]=useState([])

 const data = useLocation()
const start= data.state.start
const end=data.state.end



const onlyparasha=()=>{
 const arr= datam.filter(
    (element) =>
      (element.className==="parashat")
  )
  setData(arr)
}

const all=()=>{
 fetchData()
 }
function fetchData(){

    fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`, {})
    .then((response) => {
      return response.json();
    })
    .then((jsonObject) => {
       setData(jsonObject);
      
    })

}


useEffect(() => {
    fetchData()
  
  }, [])

  return (
    <div>      

      

     {
datam&&datam.map((e, ind) =>
(
  <Alone key={ind} element={e}/>
))
}
<button onClick={onlyparasha}>הצג פרשת שבוע</button>
<button onClick={all}>הצג הכל</button>


    </div>
  )
}

export default GetDate




/* <div>
<h1>{element.title}</h1>
<h2>{element.description}</h2>
<h3>{element.start}</h3>
</div> */






