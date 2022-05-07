import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function AcidAttacks()
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
<h4>Acid Attacks</h4>
<h5>An acid attack, also called acid throwing, vitriol attack, or vitriolage, is a form of violent assault involving the act of throwing acid or a similarly corrosive substance onto the body of another "with the intention to disfigure, maim, torture, or kill" </h5>
<img src='../assets/visualizations/acidattack.png' height="750" width="1200" alt=" " />
<br></br>
 <h5>Highest Acid attacks were reported in Uttar Pradesh, West Bengal, Delhi. </h5>
</center>

</div>

        </React.Fragment>
    )
}