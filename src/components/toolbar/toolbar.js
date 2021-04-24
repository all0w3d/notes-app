import React from 'react';
import AddNewBtn from '../addNewBtn/addNewBtn';
import Filter from '../filter/filter';
import Status from '../status/status';

const Toolbar = ({onAdd}) => {

  


    
        return (
            
            <div className="toolbar__inner">
                <AddNewBtn onAdd = {() => onAdd()}/>
                <Filter/>
                <Status/>
            </div>
            
        );
    
}

export default Toolbar;