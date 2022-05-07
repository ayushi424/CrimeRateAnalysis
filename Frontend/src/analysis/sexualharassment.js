import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Sexualharassment()
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
<h4>Sexual harassment</h4>
<h5>According to (Section 354A IPC), Sexual harassment is the: Unwelcome touching or other physical contact. Asking or demanding sex or any other sexual activity. 
    <br></br>Making remarks which are of a sexual nature </h5>
<img src='../assets/visualizations/sexualharassment.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}