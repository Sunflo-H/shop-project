import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }
    handleIncrease() {
        console.log('increase');
        console.log(this);
    }
    handleDecrease() {
        console.log('decrease');
        console.log(this);
    }
    render() {
        console.log(this);
        return (
          <div>
            <h1>0</h1>
            <button onClick={this.handleIncrease}>+1</button>
            <button onClick={this.handleDecrease}>-1</button>
          </div>
        );
      }
}

Test.defaultProps = {
  name: '이름없음'
};

export default Test;