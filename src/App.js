import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12,
    };
    //this.onSetColor = this.onSetColor.bind(this);
  }

  onReceiveColor = (param) => {
    this.setState({
      color: param,
    });
  };

  onReSize = (value) => {
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <=30) 
        ? this.state.fontSize + value
        : this.state.fontSize
      });
  };

  onResetDefault = (value)=>{
    if(value === true)
    {
      this.setState({
        color: 'red',
        fontSize: 12,
      });
    }
  }

  render() {
    return (
      <div className='container' style={{ marginTop: 50 }}>
        <div className='row'>
          <ColorPicker color={this.state.color} onReceiveColor={this.onReceiveColor} />
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <SizeSetting size={this.state.fontSize} onReSize={this.onReSize} />
            <Reset onResetDefault={this.onResetDefault}/>
          </div>
          <Result color={this.state.color} size={this.state.fontSize} />
        </div>
      </div>
    );
  }
}
export default App;
