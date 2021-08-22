import React from 'react';

//Functionコンポーネント
// function App() {
//   return <h1>Hello</h1>;
// }
const App = () => {
  const profiles = [
    {
      name: 'Taro',
      age: 20,
    },
    {
      name: 'Hanako',
      age: 30,
    },
    {
      name: 'NoName',
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!
    </div>
  );
};

//defaultProps
User.defaultProps = {
  age: 1,
};

export default App;
