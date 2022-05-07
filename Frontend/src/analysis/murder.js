import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Murder()
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
<h4>Murder</h4>
<h5>Murder comes under Section 300 IPC
Then it should be punished under Section 302 IPC.
<br></br> If it falls within any of the Exceptions then it will become Culpable Homicide not amounting to Murder as defined under Section 299 IPC 
<br></br>and will get a punishment for Culpable Homicide under Section 304 IPC. </h5>
<img src='../assets/visualizations/states_murder.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}