import React from 'react';

/**
 * Components
 */
//classコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="foo">foo</label>
//         <input
//           type="text"
//           onClick={() => {
//             console.log("I'm clicked.");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

//Functionコンポーネント
// function App() {
//   return <h1>Hello</h1>;
// }
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
