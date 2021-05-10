import { Button } from '@bokken/components';
import Icon from './assets/images/bokken.svg';
import './style.css';

const App = (): JSX.Element => (
  <div>
    <h1>Hello Bokken</h1>
    <img src={Icon} alt="bokken" />
    <Button label="hojjat" />
  </div>
);

export default App;
