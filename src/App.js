import React from 'react';

function App() {
  /**
   * jsxの方が直感的に記述できる
   */

  // return <h1>Hello, World!</h1>;

  //jsで記述した場合
  return React.createElement('div', null, 'Hello, World!');
}

export default App;
