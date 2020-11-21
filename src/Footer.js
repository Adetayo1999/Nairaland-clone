import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import SearchComponent from './Search'
function Footer() {
    return (
      <div className="footer">
        <div className="members-online">
          <h4>Members Online:</h4>
          <p className="mem-stats">
            (<b>2739</b> and <b>5668 Guests</b> online in <b>last 5 minutes</b>!
            )
          </p>
        </div>
        <div className="original-footer">
          <SearchComponent />
          <p className="of-p">
            <Link to="/" title="Nigerian Forum" className="nairaland">
              Nairaland
            </Link>{" "}
            - Copyright &copy; 2007 - 2020
            <Link to="https://adetayomodified.netlify.app" className="profile">
              Olutayo Kehinde.
            </Link>
            All rights reserved. See{" "}
            <Link to="/advertise" className="advert">
              How to Advertise.
            </Link>
          </p>
          <p className="of-pa">
            {" "}
            <b>Disclaimer:</b> Every Nairaland member is
            <b>solely responsible </b>for <b>anything</b> that he/she{" "}
            <b>posts</b> or <b>uploads</b> on Nairaland.
          </p>
        </div>
      </div>
    );
}
export default Footer
