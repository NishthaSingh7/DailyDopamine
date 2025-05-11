import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div id="header1">

            {/* <img src ="https://media.licdn.com/dms/image/v2/D4D35AQFhqkRmBEpZqA/profile-framedphoto-shrink_800_800/B4DZYa9.o7HIAg-/0/1744209177535?e=1747321200&v=beta&t=7fqRi8qeMytdHuqqpTdBeTZrQZuCsW6-5_4ORU3luk0" height="60px"/> */}
            <h3>DailyDopamine</h3>
            <div class="listNav">
                <ul>
                <li>
                    <NavLink to ="/" className={({isActive}) => isActive ? 'active-link':''}>Home</NavLink>
                </li>
                <li class="dropdown1">
                    <span>
                        <NavLink to ="/login" className={({isActive}) => isActive ? 'active-link':''}>Login</NavLink>
 </span>
                    <ul class ="dropdown-content">
                        <li>New User</li>
                        <li>Account Details</li>
                    </ul>
                </li>
                  <li class="dropdown1">
                    <span>
                        <NavLink to ="/all" className={({isActive}) => isActive ? 'active-link':''}>Explore</NavLink>
 </span>
                    <ul class ="dropdown-content">
                        <li>
                        <NavLink to ="/timer" className={({isActive}) => isActive ? 'active-link':''}>Pomodoro Timer</NavLink>

                        </li>
                        <li>e2</li>
                    </ul>
                </li>
                <li class="dropdown1">
                    <span>
                 <NavLink to ="/themes" className={({isActive}) => isActive ? 'active-link':''}>Modes</NavLink>

                    </span>
                    <ul class ="dropdown-content">
                        <li>Dark</li>
                        <li>Light</li>
                    </ul>
                </li>
                <li class="dropdown1">
                    <span>
                        <NavLink to ="/about" className={({isActive}) => isActive ? 'active-link':''}>About</NavLink></span>
                    <ul class ="dropdown-content">
                        <li>Github</li>
                        <li>Contact</li>
                    </ul>
                    </li>
                </ul>

            </div>

        </div>

    );
}

export default Header;