import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Humantrafficking()
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
<h4>Human trafficking</h4>
<h5> Article 23 of the Constitution of India prohibits trafficking in any form.
    <br></br> It prohibits trafficking in human beings and beggar and other forms of forced labor making provisions for punishment of the contravention of such laws.</h5>
<img src='../assets/visualizations/humantrafficking.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}