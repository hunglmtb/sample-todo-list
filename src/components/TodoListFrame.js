import React, {Component} from 'react';
import firebase from '../Firebase';
import TodoList from "./TodoList";
import ToggleAll from "./ToggleAll";

class TodoListFrame extends Component {

    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            boards: [],
            loading: true,
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, status } = doc.data();
            boards.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                status,
            });
        });
        this.setState({
            boards,
            loading: false,
        });
    }

    setupQuery(filterBy) {
        this.unsubscribe && this.unsubscribe();
        if(filterBy && filterBy !== 'all') {
            this.ref = firebase.firestore().collection('boards').where("status", "==", filterBy);
        }
        else{
            this.ref = firebase.firestore().collection('boards');
        }
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    componentDidMount() {
        const {filterBy} =  this.props;
        this.setupQuery(filterBy);
    }

    componentDidUpdate(prevProps, prevState) {
        const {filterBy} =  this.props;
        if (filterBy !== prevProps.filterBy) {
            this.setupQuery(filterBy);
        }
    }

    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
    }

    render() {
        return (
            <div className="TodoListFrame">
                <TodoList dataList={this.state.boards}/>
                <ToggleAll dataList={this.state.boards}/>
            </div>
        );
    }
}

export default TodoListFrame;
