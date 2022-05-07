import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Cheating()
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
<h4>Cheating</h4>
<h5>Cheating is considered as a criminal offence under the Indian Penal Code. It is done in order to gain profit or an advantage from another person by using some deceitful means. 
    <br></br>The person who deceives another knows for the fact that it would place the other person in an unfair situation</h5>
<img src='../assets/visualizations/cheating.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}