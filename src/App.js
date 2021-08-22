import React from 'react';

function App() {
  /**
   * jsxの方が直感的に記述できる
   */
  // const greeting = 'Hi, Tom!';
  // //jsxではclassは"className"を使う
  // const dom = <h1 className="foo">{greeting}</h1>;
  // return dom;

  //onClick
  return (
    // <div>
    //   <label htmlFor="foo">foo</label>
    //   <input
    //     type="text"
    //     onClick={() => {
    //       console.log('I am clicked.');
    //     }}
    //   />
    // </div>

    //外側のタグを表示したくない場合は"React.Fragment"
    <React.Fragment>
      <label htmlFor="foo">foo</label>
      <input
        type="text"
        onClick={() => {
          console.log('I am clicked.');
        }}
      />
    </React.Fragment>
  );
}

export default App;
