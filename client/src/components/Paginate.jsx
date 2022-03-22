import React from 'react';

export function Paginate({productsAmount, productsPerPage, paginate, currentPage}) {
    const lastPage = Math.ceil(productsAmount / productsPerPage);

    return(
        <nav className='paginate'>
            {currentPage !== 1 &&<button className='paginate__button' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>}
            {currentPage !== lastPage &&<button className='paginate__button' onClick={() => paginate(currentPage + 1)} disabled={currentPage === lastPage}>Next</button>}
        </nav>
    )
}

export default Paginate;