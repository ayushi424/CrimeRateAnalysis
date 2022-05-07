import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Facts from './components/facts';
import Overall from './analysis/Overall';
import AcidAttacks from './analysis/acidattacks';
import Arson from './analysis/arson';
import Cheating from './analysis/cheating';
import Counterfeiting from './analysis/counterfeiting';
import Cruelhusband from './analysis/cruelhusband';
import Criminalbreach from './analysis/criminalbreach';
import Dacoity from './analysis/dacoity';
import Negligentdriving from './analysis/deathnegligentdriving';
import Deathsbynegligence from './analysis/deathbynegligence';
import Dowry from './analysis/dowrydeaths';
import Forgery from './analysis/forgery';
import Housetrespass from './analysis/housetrepass';
import Humantrafficking from './analysis/humantrafickking';
//import Kidnapping from './analysis/'
import Offencesagainststate from './analysis/offenceagainststate';
import Otherriots from './analysis/otherriots';
import Politicalriots from './analysis/politicalriots';
import Rashdriving from './analysis/rashdriving';
import Riots from './analysis/riots';
import Robbery from './analysis/robbery';
import Sexualharassment from './analysis/sexualharassment';
import Culpablehomicide from './analysis/culpablehomocide';
import Murder from './analysis/murder';
import Rape from './analysis/rape';
import Theft from './analysis/theft';
import Voyeurism from './analysis/voyeurism';
function App() {
  return (
     <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/factsnfigures" element={<Facts/>}/>
        <Route path="/overall-analysis" element={<Overall/>}/>
        <Route path="/acidattacks" element={<AcidAttacks/>}/>
        <Route path="/arson" element={<Arson/>}/>
        <Route path="/cheating" element={<Cheating/>}/>
        <Route path="/counterfeiting" element={<Counterfeiting/>}/>
        <Route path="/criminalbreachoftrust" element={<Criminalbreach/>}/>
        <Route path="/crueltybyhusband" element={<Cruelhusband/>}/>
        <Route path="/dacoity" element={<Dacoity/>}/>
        <Route path="/deathduetonegligentdriving" element={<Negligentdriving/>}/>
        <Route path="/deathsbynegligence" element={<Deathsbynegligence/>}/>
        <Route path="/dowrydeaths" element={<Dowry/>}/>
        <Route path="/forgery" element={<Forgery/>}/>
        <Route path="/housetrespass-housebreaking" element={<Housetrespass/>}/>
        <Route path="/humantrafficking" element={<Humantrafficking/>}/>
        {/* <Route path="/kidnapping-abduction" element={<Kidnapping/>}/> */}
        <Route path="/offenceagainststate" element={<Offencesagainststate/>}/>
        <Route path="/otherriots" element={<Otherriots/>}/>
        <Route path="/politicalriots" element={<Politicalriots/>}/>
        <Route path="/Rashdriving" element={<Rashdriving/>}/>
        <Route path="/riots" element={<Riots/>}/>
        <Route path="/Robbery" element={<Robbery/>}/>
        <Route path="/sexualharassment" element={<Sexualharassment/>}/>
        <Route path="/culpablehomicide" element={<Culpablehomicide/>}/>
        <Route path="/murder" element={<Murder/>}/>
        <Route path="/rape" element={<Rape/>}/>
        <Route path="/theft" element={<Theft/>}/>
        <Route path="/voyeurism" element={<Voyeurism/>}/> 

        </Routes>
    </Router> 
       </div>
   
  );
}

export default App;


