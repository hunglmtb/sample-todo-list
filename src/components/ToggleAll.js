import React, {Component} from 'react';
import firebase from "../Firebase";
import './Button.css';

class ToggleAll extends Component {

    toggleAll = () => {
        const {dataList} =  this.props;
        if (dataList && dataList.length > 0){
            // Get a new write batch
            const db = firebase.firestore();
            const batch = db.batch();
            let status = undefined;
            for (let i = 0; i < dataList.length; i++) {
                const item = dataList[i];
                status = status? status: (item.status === 'done' ? 'active' : 'done');
                const itemRef = db.collection("boards").doc(item.key);
                batch.set(itemRef, {status, title: item.title || ''});
            }
            batch.commit().then(function () {
                console.log("batch successfully update!");
            });
        }
    }

    render() {
        return (
            <button className={'Button ToggleAllBtn'}
                onClick={this.toggleAll}>
                Toggle All
            </button>
        );
    }
}

export default ToggleAll;
