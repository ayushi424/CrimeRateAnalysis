import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Deathsbynegligence()
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
<h4>Death by negligence</h4>
<h5>In law, ‘Negligence’ is defined as an act of carelessness which damages the property of a person. The negligence is caused when a person has acted illegally or carelessly.  </h5>
<img src='../assets/visualizations/deathsbynegligence.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}