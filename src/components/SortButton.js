import React from 'react'

function sortButton({children}) {

    const sortByLastName = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.net_worth - b.net_worth
        }, 
        down: {
            class: 'sort-down',
            fn: (a, b) => b.net_worth - a.net_worth
        },
        default: {
            class: 'sort-up',
            fn: (a, b) => a 
        }
    }; 
        
    return (
        <div>
            <button sortButton={sortByLastName }>
                {children}
            </button>
        </div>
    )
}

export default sortButton;



