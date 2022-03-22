import React from 'react';

export function Paginate({productsAmount, productsPerPage, paginate, currentPage}) {
    const lastPage = Math.ceil(productsAmount / productsPerPage);

    return(
        <nav >
            {currentPage !== 1 &&<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>}
            {currentPage !== lastPage &&<button onClick={() => paginate(currentPage + 1)} disabled={currentPage === lastPage}>Next</button>}
        </nav>
    )
}

export default Paginate;