import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Forgery()
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
<h4>Forgery</h4>
<h5>forgery, in law, making of a false writing with an intent to defraud. Writing, to be forgery, must either have legal significance or be commonly relied upon in business transactions. 
    <br></br>It need not be handwriting; the law of forgery covers printing, engraving, and typewriting as well. </h5>
<img src='../assets/visualizations/forgery.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}