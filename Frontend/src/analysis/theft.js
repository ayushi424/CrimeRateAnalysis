import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Theft()
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
<h4>Theft</h4>
<h5>Any person with the intention to take a movable property out of the possession of the property holder without his consent then this is called theft. (1) Intention must be dishonest. 
    <br></br>The intention is the important ingredient to perform the crime of theft the intention must be dishonest </h5>
<img src='../assets/visualizations/theft.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}