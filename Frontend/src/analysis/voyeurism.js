import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Voyeurism()
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
<h4>Voyeurism</h4>
<h5> Voyeurism under the Indian Penal Code, 1860, section-354C describes the act as, “Viewing and/or capturing the image of a girl or woman going about her private acts,
    <br></br> where she thinks that no one is watching her is a crime.</h5>
<img src='../assets/visualizations/voyeurism.png' height="750" width="1200" alt=" " />
<br></br>
 <h5> </h5>
</center>

</div>

        </React.Fragment>
    )
}