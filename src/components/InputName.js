import React, {Component} from 'react';
import firebase from '../Firebase';
import './InputName.css';

class InputName extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title } = this.state;

    this.ref.add({
      title,
      status: 'active',
    }).then((docRef) => {
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    this.setState({
        title: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="NameInputContainer">
                    <input type="text"
                           className="NameInput"
                           name="title"
                           required={true}
                           minLength="3"
                           value={title}
                           onChange={this.onChange}
                           placeholder="Enter todo name here"/>
                </div>
            </form>
        </div>
    );
  }
}

export default InputName;
