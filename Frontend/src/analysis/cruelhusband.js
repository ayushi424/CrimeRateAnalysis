import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Cruelhusband()
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
<h4>Cruelty by husband</h4>
<h5>Section 498-A of the IPC is a criminal law wherein the wife, and her parental family can charge any or the entire husband's family of physical or mental cruelty.</h5>
<img src='../assets/visualizations/crueltybyhusband.png' height="750" width="1200" alt=" " />
<br></br>
</center>

</div>

        </React.Fragment>
    )
}