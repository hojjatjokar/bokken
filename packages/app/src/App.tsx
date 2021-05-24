import React from 'react';
import { Button } from '@bokken/components';
import { sum } from '@bokken/utils';
//import Icon from './assets/images/bokken.svg';
// import './style.css';

const App = (): JSX.Element => {
  console.log('sum()', sum(1, 2, 3));
  return (
    <div>
      <h1>Hello Bokken</h1>
      <Button label="hojjat" />
    </div>
  );
};

export default App;
