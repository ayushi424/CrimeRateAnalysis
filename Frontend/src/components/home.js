import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup'
export default function Home()
{
    return(
        <React.Fragment>
            <div className='backgroundone'>
                <center>
                <h1>Welcome to Crime Rate Analysis</h1>
                <br></br>
 
                <h2>Choose your next step:</h2>
                </center>
            
            <div class="navbar">
            <div class="button">
            <ul>
            <li><a button class="btn-solid danger" /><Link to="/landingpage">  Home </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/"> Crime Analysis Home </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/factsnfigures"> Facts </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/overall-analysis"> Overall Analysis </Link></li>
                     </ul> 
             </div>
             </div>
<center>
 {/* <img src='../assets/images/login.jpg' height="500" width="400" alt=" " />
 <img src='../assets/images/signup.jpg' height="500" width="400" alt=" " /> */}
                <h3><b>Crime Rate in INDIA</b></h3>
 <h5>The crime rate (crime incidence per 100,000 of population) in India increased from 383.5 in 2018 and 385.5 in 2019 to 383.8 in 2020 according to the National Crime Records Bureau.
     <br></br>The rise in crime in 2020 has been generally attributed to COVID-19 related restrictions and violations.
     <br></br>2020 saw a fall in crimes such as rape, kidnapping and crime against children, while disobeying public servant related crimes increased 21%.
<br></br>In 2018, a total of 5 million cognizable crimes were registered comprising 3 million Indian Penal Code (IPC) crimes and 2 million Special and Local Laws (SLL) crimes.
 <br></br>The average charge-sheeting rate for 2020 is 82.5%.
 <br></br>Crime in India has been recorded since the British Raj, with comprehensive statistics now compiled annually by the National Crime Records Bureau (NCRB), under the Ministry of Home Affairs (India) (MHA).
<br></br>As of 2019, a total of 51.5 lakh (5.15 million) cognizable crimes comprising 32.2 lakh Indian Penal Code (IPC) crimes and 19.4 lakh Special and Local Laws (SLL) crimes were registered nationwide. 
<br></br>Showing a 1.6% annual increase in the registration of cases (50.7 lakh cases), 
the crime rate per 100,000 population has increased from 383.5 in 2018 to 385.5 in 2019</h5>
 <br></br>
 <h3>Select the crime for it's analysis from below:</h3>

 <div class="navbar">
            <div class="button">
            <ListGroup horizontal>
                <ul>
                <li><a button class="btn-solid danger" /><Link to="/acidattacks"> Acid Attacks </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/arson"> Arson </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/cheating"> Cheating </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/counterfeiting"> Counterfeiting </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/criminalbreachoftrust"> Criminal breach of trust </Link></li>
                </ul>
                </ListGroup> 
                <ul>
                
                <li><a button class="btn-solid danger" /><Link to="/crueltybyhusband"> Cruelty by husband </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/dacoity"> Dacoity </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/deathduetonegligentdriving"> Death due to negligent driving </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/deathsbynegligence"> Deaths by negligence </Link></li>
                </ul>
                <ul>
                
                <li><a button class="btn-solid danger" /><Link to="/dowrydeaths"> Dowry Deaths </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/forgery"> Forgery </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/housetrespass-housebreaking"> House trespass- house breaking </Link></li>
                </ul>
                <ul>
                
                <li><a button class="btn-solid danger" /><Link to="/humantrafficking"> Human Trafficking </Link></li>
                {/* <li><a button class="btn-solid danger" /><Link to=""> Kidnapping Abduction </Link></li> */}
                <li><a button class="btn-solid danger" /><Link to="/offenceagainststate"> Offence against state </Link></li>
                </ul>
                <ul>
                <li><a button class="btn-solid danger" /><Link to="/otherriots"> Other riots </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/politicalriots"> Political riots </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/Rashdriving"> Rash Driving </Link></li>
                </ul>
                <ul>
                <li><a button class="btn-solid danger" /><Link to="/riots">Riots </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/Robbery"> Robbery </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/sexualharassment"> Sexual Harassment </Link></li>
                </ul>
                <ul>
                <li><a button class="btn-solid danger" /><Link to="/culpablehomicide"> Culpable Homicide </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/murder"> Murder </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/rape"> Rape </Link></li>
                </ul>
                <ul>
                <li><a button class="btn-solid danger" /><Link to="/theft"> Theft </Link></li>
                <li><a button class="btn-solid danger" /><Link to="/voyeurism"> Voyeurism </Link></li>
                </ul>
                {/* </ListGroup>      */}
             </div>
             </div>
           
             
  </center>
  </div>
        </React.Fragment>
    )
}

