import React from 'react';
import { FormattedMessage } from 'react-intl'

export function Paginate({productsAmount, productsPerPage, paginate, currentPage}) {
    const lastPage = Math.ceil(productsAmount / productsPerPage);

    return(
        <nav className='paginate'>
            {currentPage !== 1 &&<button className='paginate__button' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><FormattedMessage id="app.button-prev" defaultMessage="Prev"/></button>}
            {currentPage !== lastPage &&<button className='paginate__button' onClick={() => paginate(currentPage + 1)} disabled={currentPage === lastPage}><FormattedMessage id="app.button-next" defaultMessage="Next"/></button>}
        </nav>
    )
}

export default Paginate;