import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Offencesagainststate()
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
<h4>Offencesagainststate</h4>
<h5> criminal activities that are directed against the existence of the state itself viz. treason, sedition and rebellion. 
    <br></br>Thus cases reported under sections 121, 121A, 122, 123, 124A, 153A and 153B of Indian Penal Code (IPC) have been categorized as 'Offences against the State.</h5>
<img src='../assets/visualizations/offenceagainststate.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}