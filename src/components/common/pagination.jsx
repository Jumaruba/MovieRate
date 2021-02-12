/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pagesArray = _.range(1, pagesCount + 1);

    if (pagesCount === 1) return null;

    return (
        <nav>
            <ul className="pagination">
                {pagesArray.map(page => (
                    <li
                        className={ page === currentPage ? "page-item active" : "page-item" }
                        key={page}
                        style={{ cursor: "pointer" }}

                    >
                        <a className="page-link"
                            onClick={() => onPageChange(page)}
                        > {page} </a>
                    </li>
                ))}
            </ul>
        </nav >
    );
}

export default Pagination;