import React, { Component } from 'react';
import '../App.css';

class Reset extends Component {

  onResetDefault = () => {
    this.props.onResetDefault(true)
  };

  render() {
    return (
      <button 
      type='button' 
      className='btn btn-primary'
      onClick={this.onResetDefault}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
