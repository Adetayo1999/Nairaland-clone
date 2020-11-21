import React from 'react'
import Linked from './Link'
import SearchComponent from "./Search";
import "./Header.css";

function Header({user}) {
    return (
        <div className ="header">
            <h1 className ="logo-head">NAIRALAND</h1>
             <div className ="users-info">
    <p className ="welcome">Welcome, {user ? user+"(m)" : "Guest" }: {!user && 
      <>
       <Linked path ="search">
        Edit Profile
       </Linked> /
       <Linked path ="sH">
         SH
       </Linked> /
       <Linked path ="follow">
         Followed Topics(94)
       </Linked> /
       <Linked path ="follow-board">
        Followed Boards(3527)
       </Linked> /
       <Linked path ="lands">
          L&S
       </Linked> /
       <Linked path ="mention">
        Mentions(2)
       </Linked> /
       <Linked path ="fg">
        FG
       </Linked> /
       <Linked path ="fs">
        FS
       </Linked> /
       <Linked path ="trend">
          Trending
       </Linked> /
       <Linked path="recent">
           Recent
       </Linked> /
       <Linked path ="new">
           New
       </Linked>
      </>
    
    } </p>
    <div className ="informane">
     <p><b>Stats:</b> 2,535,916 members, 5,822,390 topics. 
     <b>Date:</b> Sunday, 30 August 2020 at 12:55PM / <Linked path ="logout">Logout(all)</Linked>
     </p>
  

    </div>
         
             </div>
             <SearchComponent />
        </div>
    )
}

export default Header
