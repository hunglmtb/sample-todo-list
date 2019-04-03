import React, { Component } from "react";
export const FilterContext = React.createContext({});

class FilterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: "all",
    };
  }

  setFilter = (filter) => {
      this.setState(state => {
          return  state.filter === filter ? state: {filter};
      });
  };

  render() {
    return (
      <FilterContext.Provider
        value={{
          ...this.state,
            setFilter: this.setFilter
        }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const Consumer = FilterContext.Consumer;
export const Provider = FilterProvider;
