import React, { Component } from 'react';
import '../App.css';

class SizeSetting extends Component {
  onChangeSize(value){
    this.props.onReSize(value)
  } 
  render(){
    return (
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Font Size : {this.props.size}px</h3>
        </div>
        <div className='panel-body'>
          <button type='button' className='btn btn-default' onClick={() => this.onChangeSize(+2)}>
            Increase
          </button>
          <button type='button' className='btn btn-default' onClick={() => this.onChangeSize(-2)}>
            Decrease
          </button>
        </div>
      </div>
    );
  };
}

export default SizeSetting
