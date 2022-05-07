import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Dacoity()
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
<h4>Dacoity</h4>
<h5>The offence of dacoity consists in the cooperation of five or more persons to commit or attempt to commit robbery. 
    <br></br>It is necessary that all the persons should share the common intention of committing robbery.</h5>
<img src='../assets/visualizations/dacoity.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}