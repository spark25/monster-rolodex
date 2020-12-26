import React from 'react'

import './search-box.css'

export const SearchBox = ({ placeholder, handlechange }) => {
    return (
        <div className="search-box">
            <input
                type="search"
                placeholder={placeholder}
                onChange={ handlechange }>
            </input>
        </div>
    )
}