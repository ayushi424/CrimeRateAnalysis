import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Politicalriots()
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
<h4>Political riots</h4>
<h5> Analysis of political riots- riots occured due to political reasons.</h5>
<img src='../assets/visualizations/politicalriots.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}