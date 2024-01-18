import React from 'react';
import food6 from './Images/food6.PNG'; 
import food5 from './Images/food5.PNG'; 
import food4 from './Images/food4.PNG'; 
import './home.css';
 /*import PracticeThemeContext from '../PracticeTheme'; */

const home = () =>{
    return(
        
<div class="info">
   {/* <PracticeThemeContext /> */}
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
<img  className= "image" src={food6} alt="Nepalese food" />
<img  className= "image" src={food5} alt="Nepalese food" />
<img  className= "image" src={food4} alt="Nepalese food" />
</div>
    )
}

export default home;