import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Rape()
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
<h4>Rapes</h4>
<h5>Section 375 of the Indian Penal Code defines rape as "sexual intercourse with a woman against her will, without her consent, by coercion, 
    <br></br>misrepresentation or fraud or at a time when she has been intoxicated or duped, or is of unsound mental health and in any case if she is under 18 years of age."</h5>
<img src='../assets/visualizations/states_rape.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}