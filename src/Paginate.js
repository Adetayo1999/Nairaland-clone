import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import "./Paginate.css";

function Paginate({ totalPosts, postPerPage , paginateMe}) {
    const paginated = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        paginated.push(i);
    }
    return (
        <ul className ="pagination">
            {
                paginated.map(paginate =>
                    <li className="page-item" key={paginate}>
                        (<Link path ="/" onClick = {() => paginateMe(paginate)}>
                          {paginate}
                        </Link>)
                    </li>
                    )
            }
        </ul>
    )
}

export default Paginate
