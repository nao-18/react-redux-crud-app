import React from 'react';
import PropTypes from 'prop-types';

//Functionコンポーネント
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

//PropTypes
User.propTypes = {
  name: PropTypes.string,
  //必須化(isRequired)
  age: PropTypes.number.isRequired,
};

//defaultProps
User.defaultProps = {
  age: 1,
};

export default App;
