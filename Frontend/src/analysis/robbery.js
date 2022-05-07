import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Robbery()
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
<h4>Robbery</h4>
<h5>Section 390, IPC, defines the offence of robbery. Robbery in common language means to deprive a person of his or her own property. 
    <br></br>The chief distinguishing element in robbery, theft, and extortion is the presence of imminent fear of violence.
     In all robbery there is either theft or extortion </h5>
<img src='../assets/visualizations/robbery.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}