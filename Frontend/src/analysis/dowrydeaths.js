import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Dowry()
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
<h4>Dowry Deaths</h4>
<h5>Dowry deaths are deaths of married women who are murdered or driven to suicide over disputes about dowry </h5>
<img src='../assets/visualizations/dowrydeaths.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}