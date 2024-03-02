import classNames from 'classnames';
import React from 'react';

const TodoFilter = ({setFilter, filterMap, activeFilter}) => {
  const filterKeys = Object.keys(filterMap)
    return (
      <div className='filter-container'>
        {
          filterKeys.map(filterName => <button onClick={() => setFilter(filterName)} className={classNames({active: filterName === activeFilter, inactive: filterName !== activeFilter})} key={filterName}>{filterName}</button> )
        }
      </div>
    );
}

export default TodoFilter;
