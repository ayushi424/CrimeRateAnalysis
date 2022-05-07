import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Arson()
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
<h4>Arson</h4>
<h5>The criminal act of deliberately setting fire to property.</h5>
<img src='../assets/visualizations/arson.png' height="750" width="1200" alt=" " />
<br></br>
 <h5>Highest Arson reportes were reported in Madhya Pradesh, Maharashtra, Assam. </h5>
</center>

</div>

        </React.Fragment>
    )
}