import React, {Component} from 'react';
import InputName from "./components/InputName";
import * as Context from "./context";
import TodoListFrame from "./components/TodoListFrame";
import FilterInput from "./components/FilterInput";
import  "./App.css";

class App extends Component {

    render() {
        return (
            <Context.Filter.Provider>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                TODO APP
                            </h3>
                        </div>
                        <InputName/>
                        <Context.Filter.Consumer>
                            {({ filter }) => (
                                <TodoListFrame filterBy={filter}/>
                            )}
                        </Context.Filter.Consumer>
                        <FilterInput />
                    </div>
                </div>
            </Context.Filter.Provider>
        );
    }
}

export default App;
