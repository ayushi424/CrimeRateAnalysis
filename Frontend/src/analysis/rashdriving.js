import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Rashdriving()
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
<h4>Rash driving</h4>
<h5> Under Section 279 of the Indian Penal Code, any individual who is driving or riding a vehicle on any public way in a rash or negligent manner, 
    <br></br>which may endanger human life or injure other people, will be punished by law.</h5>
<img src='../assets/visualizations/rashdriving.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}