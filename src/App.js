import React, { Component } from 'react';

//Functionコンポーネント
const App = () => <Counter />;

class Counter extends Component {
  //親からpropsを受け取る
  constructor(props) {
    //親クラスでpropsを初期化する
    super(props);
    this.state = { count: 0 };
  }

  //メンバ変数
  hundlePlusButton = () => {
    //setStateによってstateを更新した際に、再度renderが呼ばれる
    this.setState({
      count: this.state.count + 1,
    });
  };

  hundleMinusButton = () => {
    const count = this.state.count;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
