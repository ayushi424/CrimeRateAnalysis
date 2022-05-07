import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Culpablehomiside()
{
    return(
        <React.Fragment>
            <div class="background">
            <div class="navbar">
               <div class="button">
                    <ul>
                    <li><a button class="btn-solid danger" /><Link to="/"> Crime Analysis Home </Link></li>
                    </ul> 
            
                 </div>
             </div>
<center>
<h4>Culpable homicide</h4>
<h5>Homicide is a term which originates from the Latin term 'Homo' means human and 'caedere' means killing. </h5>
<img src='../assets/visualizations/culpablehomiside.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}