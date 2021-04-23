import React, { Component } from 'react';
import AddNewBtn from '../addNewBtn/addNewBtn';
import Filter from '../filter/filter';
import Status from '../status/status';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar__inner">
                <AddNewBtn/>
                <Filter/>
                <Status/>
            </div>
        );
    }
}

export default Toolbar;