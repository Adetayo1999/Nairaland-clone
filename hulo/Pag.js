import React from 'react'

function Pag({totalPosts , postPerpage , paginate}) {
    const Loop = [];
    for(let i=1; i <= totalPosts/postPerpage; i++ ){
       Loop.push(i);
    }
    return (
        <ul className="pagination">
            {
                Loop.map(loop =>
                    <li key ={loop} className ="page-item">
                     <a href="!#" onClick ={() => paginate(loop)} className ="page-link">
                      {loop}
                     </a>
                    </li>
                    
                    )
            }
        </ul>
    )
}

export default Pag
