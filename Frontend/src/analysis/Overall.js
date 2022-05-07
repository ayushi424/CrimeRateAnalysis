import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Overall()
{
    return(
        <React.Fragment>
            <div class="background">
            <div class="navbar">
               <div class="button">
                    <ul>
                    <li><a button class="btn-solid danger" /><Link to="/"> Crime Analysis Home </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/factsnfigures"> Facts </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/overall-analysis"> Overall Analysis </Link></li>
                     </ul> 
            
                 </div>
             </div>
<center>
 <h3>Welcome to Overall Crime Rate Analysis!!</h3>
 <h4>View the overall analysis of crime reported for different types of crimes.</h4>
 
  <img src='../assets/visualizations/state1.png' height="750" width="1100" alt=" " />
{/* <img src='../assets/images/signup.jpg' height="500" width="400" alt=" " /> */}
 
 <h4>Here, you can find the State wise analysis for different crimes commited.</h4>
  </center>
</div>

        </React.Fragment>
    )
}