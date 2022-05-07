import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Negligentdriving()
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
<h4>Deaths due to negligent driving</h4>
<h5> In 2020, 1.20 lakh people died in road accidents caused by negligence. 
    <br></br>A total of 1.20 lakh cases of "deaths due to negligence relating to road accidents" were recorded in 2020 in India</h5>
<img src='../assets/visualizations/deathduetonegligentdriving.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}