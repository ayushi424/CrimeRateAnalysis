import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Riots()
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
<h4>Riots</h4>
<h5> Rioting. —Whenever force or violence is used by an unlawful assembly, or by any member thereof, in prosecution of the common object of such assembly, 
    <br></br>every member of such assembly is guilty of the offence of rioting. </h5>
<img src='../assets/visualizations/riots.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}