import React,{useEffect, useState} from "react"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Fieldset } from 'primereact/fieldset';

function Alone(props){



return (

<div>

 {/* <Calendar inline  value={date} onChange={(e) => setDate(e.value)}></Calendar>  */}


<h1>{props.element.title}</h1>
<h2>{props.element.description}</h2>
<h3>{props.element.start}</h3>
</div>

)
}

export default Alone
