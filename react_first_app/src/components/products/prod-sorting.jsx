import classNames from 'classnames';
import React from 'react';

const ProdSorting = ({setSorting, sortOrder, activeSort}) => {
    const sortKeys = Object.keys(sortOrder);
    return (
        <div className='option-btns'>
            <p>Sorting: </p>
            {
                sortKeys.map(key => <button onClick={() => setSorting(key)} 
                                            className={classNames({active: key === activeSort, inactive: key !== activeSort})} 
                                            key={key}>
                                        {key.replace('_',' ')}
                                    </button>)
            }
        </div>
    );
}

export default ProdSorting;
