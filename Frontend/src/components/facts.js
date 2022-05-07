import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Facts()
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
    <h4><b>Analysis Facts</b></h4>
    <br></br>
 <h4>
 
* Most of the crimes were reported from states of Uttar Pradesh, Madhya Pradesh, Maharashtra and Bihar.
<br></br>

* Least number of crimes were reported in Chandigarh, D&N Haveli and Lakshadweep.
<br></br>


* Most of the Murder crime reports are from Uttar Pradesh, Bihar and Maharashtra.
<br></br>
* Attempt to murder were mostly reported in West Bengal, Uttar Pradesh and Bihar.
<br></br>
* Crime as 'culpable homiside not amounting to murder' was mostly reported in Uttar Pradesh.
<br></br>
* Crime as 'attempt to commit culpable homicide' was mostly reported in Kerala, Delhi and Bihar.
<br></br>
* Horrible and worst crime of rape was highly reported in Madhya Pradesh, Uttar Pradesh, West Bengal, Rajasthan, Delhi and Maharashtra.
<br></br>

* Reports of kidnapping and abduction were highly reported from Uttar Pradesh, West Bengal, Madhya Pradesh, Delhi and Bihar.
<br></br>
* Kidnapping and abduction  in order to muder reports were mostly from Uttar Pradesh and Bihar.
<br></br>
* Kidnapping for ransom reports were mostly from West Bengal, Uttar Pradesh, Assam and Bihar.
<br></br>
* Kidnapping and abduction of women in order to compel her for marriage were mostly reported in Uttar Pradesh, Assam and Bihar.
<br></br>

* Most of the Dacoity reports were reported in Maharashtra, Bihar and Odisha.
<br></br>
* Dacoity with murder were highly reported in Uttar Pradesh, Maharashtra,Bihar.
<br></br>
* Most of the robbery were reported in Delhi and Maharashtra.
<br></br>
* Reports of house trepass and house breaking were mostly reported in Maharashtra, Delhi and Gujarat.
<br></br>
* Most of the theft reports were reported in Delhi, Uttar Pradesh and Maharashtra.
<br></br>


* Bihar is the state were most of the riots reports were reported.
<br></br>
* Political riots reports were mostly from West Bengal and Kerala.
<br></br>
* Riots with SC/ST's VS Non-SC/ST's were highly reported in Uttar Pradesh and Maharashtra.
<br></br>
* Criminal breach of trust was highly reported in Uttar Pradesh.
<br></br>
* Forgery was highly reported in Rajasthan.
<br></br>
* Counterfeit currency and bank notes were mostly reported in West bengal and Maharashtra.
<br></br>
* Most of the Arson reports were from MAdhya Pradesh and Maharashtra.
<br></br>
* Acid Attacks were highly reported in Uttar Pradesh and West Bengal.
<br></br>
* Dowry deaths were highly reported in Bihar and Uttar Pradesh.
<br></br>


* Madhya Pradesh, Maharashtra and Uttar Pradesh are the states were reports of 'Assault on Women with intent to outrage her Modesty' were highly reported.
<br></br>
* 'Assault or use of criminal force to women with intent to Disrobe' was highly reported in Odisha, Uttar Pradesh and West Bengal.
<br></br>
* 'Cruelty by Husband or his Relatives' were mostly reported in Rajasthan and West Bengal.
<br></br>

* Sexual Harassment reports were highly reported in Uttar Pradesh, Madhya Pradesh and Maharashtra.<br></br>
* Reports of Stalking were mostly reported in Uttar Pradesh, Maharashtra and Delhi.<br></br>
* Maharashtra, Tamil Nadu and Uttar Pradesh had most reports of deaths due to negligence.<br></br>
* 'Deaths due to negligent driving/act' reports were mostly reported in Maharashtra, Uttar Pradesh and Tamil Nadu.<br></br>
* Offences against states were highly reported in Assam and Meghalaya.<br></br>
* Rash driving reports were mostly reported in Kerala.<br></br>
* Human Trafficking were highy reported in jharKhand and Maharashtra.<br></br>
* Karnataka, Kerala and Rajasthan were the states were reports of 'Offences promoting enmity between different groups' were mostly reported.
</h4>
 </center>
</div>

        </React.Fragment>
    )
}