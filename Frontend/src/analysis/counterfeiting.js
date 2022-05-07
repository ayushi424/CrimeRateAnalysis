import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Counterfeiting()
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
<h4>Counterfeiting</h4>
<h5>Counterfeiting is a crime, involving the manufacturing or distribution of goods under someone else's name, and without their permission.</h5>
<img src='../assets/visualizations/counterfeiting.png' height="750" width="1200" alt=" " />
<br></br>
 <h5></h5>
</center>

</div>

        </React.Fragment>
    )
}