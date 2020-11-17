import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.size,
      borderColor : this.props.color,
    };
  }
  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <p>
          Color : {this.props.color} - fontsize :{this.props.size}px
        </p>
        <div 
        className='content' 
        style={this.setStyle()}
        >
          Dang Duy Hiep
        </div>
      </div>
    );
  }
}

export default Result;
