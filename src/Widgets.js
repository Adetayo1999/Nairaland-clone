import React from 'react'
import "./Widgets.css";
function Widgets() {
    return (
      <div className="widgets">
        <div className="widjets-image">
          <img src="images/1.jpg" alt="widjet-1" />
        </div>
        <div className="widjets-image two">
          <img src="images/2.jpg" alt="widjet-1" />
        </div>
        <div className="widjets-image three">
          <img src="images/1.jpg" alt="widjet-1" />
        </div>
      </div>
    );
}

export default Widgets
