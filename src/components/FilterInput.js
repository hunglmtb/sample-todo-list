import React, {Component} from 'react';
import './Button.css';
import * as Context from "../context";

class FilterInput extends Component {

    render() {
        return (
            <div className={'FilterArea'} >
                <span>Filter</span>
                <FilterButton by={'all'} />
                <FilterButton by={'done'} />
                <FilterButton by={'active'} />
            </div>
        );
    }
}


const FilterButton = ({by}) => (
    <Context.Filter.Consumer>
        {({ filter, setFilter }) => (
            <button className={`Button FilterButton ${filter===by&&'FilterButtonActive'}`} onClick={() => setFilter(by)}>
                {by}
            </button>
        )}
    </Context.Filter.Consumer>
);

export default FilterInput;
