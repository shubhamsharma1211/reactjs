import React from 'react';
function Hero() {
    return (
      <div class="hero-section" >
       <div class="hero-container">
          <div class="hero-row">
            <div class="left-section">
              <div class="left-inner">
                 <div class="hero-subheading">
                 <img  src="./images/Vector-1.svg"/>    
                 <h4 class="subheading"> THE CROWN INN</h4>
                 </div>
                <h2 class="heading">A warm welcome awaits</h2>
                <p class="content">The Crown Inn nestles in a quiet corner of the picture-perfect village green of Chiddingfold in Surrey.<br/>It is hard to resist the olde world charm of The Crown Inn, which is lovingly maintained and sympathetically blended with a more sophisticated and contemporary décor to create a memorable experience. Rest your head in one of our charming rooms, dine in our oak-panelled dining room, socialize in our lounge or main bar area or just pop in for a drink and nibbles and you will receive a warm welcome.</p>
                <p class="section-link"><a href="#" class="introlink">Opening hours<svg class="svg-section" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#142A4A"></path></svg></a><br/><br/></p>
              </div>
            </div>
            <div class="right-section">
                <div class="right-inner">
                 <ul class="upside"><li><img src='./images/hero-section1.png' /></li> <li><img src='./images/hero-section1.png' /></li></ul>
                 <ul class="downside"><li><img src='./images/hero-section1.png' /></li> <li> <img src='./images/hero-section1.png' /></li></ul>    
                </div>
            </div>
          </div>
       </div>
      </div>
    );
  }
  
  export default Hero;