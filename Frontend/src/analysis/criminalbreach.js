import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Criminalbreach()
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
<h4>Criminal breach of trust</h4>
<h5>According to Section 409 of the Indian Penal Code,1860: when a criminal breach of trust is committed by a public servant, banker, merchant, agent, etc,. 
    <br></br>He/She shall be punished with imprisonment for life or imprisonment upto a period of 10 (ten) years or fine or both </h5>
<img src='../assets/visualizations/criminalbreachoftrust.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}