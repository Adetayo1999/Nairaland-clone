import React from 'react';
import {Link} from "react-router-dom";
function Linked({children , path}) {
    return (
        <Link to ={"./"+path}>
        {children}
        </Link>
    )
}

export default Linked
