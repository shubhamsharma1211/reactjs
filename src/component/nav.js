import React from 'react';
function Nav() {
    return (
      <div class="nav-bar">
       <ul class="left-menu">
           <li><a href="#">Stay</a></li>
           <li><a href="#">Eat</a></li>
           <li><a href="#">Events</a></li>
           <li><a href="#">Explore</a></li>
       </ul>
       <div class="logo"> <img  src="/images/Mask%20Group.svg"/>       </div>
       <ul class="right-menu">
           <li><a href="#">History</a></li>
           <li><a href="#">Gallery</a></li>
           <li><a href="#">Opening Hours</a></li>
           <li><a href="#">Contact</a></li>
       </ul>
      </div>
    );
  }
  
  export default Nav;