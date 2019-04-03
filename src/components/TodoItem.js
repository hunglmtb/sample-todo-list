import React, {Component} from 'react';
import './TodoItem.css';
import firebase from '../Firebase';

class TodoItem extends Component {

    handleCheckboxChange = (event, entry) => {
        const checked = event.target.checked;
        const docId = entry && entry.key;
        const updateRef = firebase.firestore().collection('boards').doc(docId);
        updateRef.set({
            title: entry.title || '',
            status: checked? 'done': 'active',
        })
        .then((docRef) => {})
        .catch((error) => {
            console.error("Error update todo item: ", error);
        });
    }

    handleDeleteItem = () => {
        const {entry} =  this.props;
        const docId = entry && entry.key;
        firebase.firestore().collection('boards').doc(docId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render() {
        const {entry} =  this.props;
        return (
            <div className={`ToDoItem ${entry.status}`}>
                <input type="checkbox"
                       className={'ToDoCheckbox'}
                       checked={entry && entry.status === 'done'}
                       onChange={event => this.handleCheckboxChange(event, entry)}
                />
                <label className={'TodoLabel'}>{entry.title}</label>
                <button className="ToDoItem-Delete"
                        onClick={this.handleDeleteItem}>
                    x</button>
            </div>
        );
    }
}

export default TodoItem;
