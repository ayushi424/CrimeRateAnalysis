import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Housetrespass()
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
<h4>House trepass-house breaking</h4>
<h5>The offence of house-breaking by night has been punished under Section 456, IPC, with imprisonment for a term which may extend to three years and fine.
    <br></br> In all the cases of housebreaking by night, there must be house-trespass and in all house-trespass there must be criminal trespass, committed during night. </h5>
<img src='../assets/visualizations/housetrespass-breaking.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}