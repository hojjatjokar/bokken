import Icon from './assets/images/bokken.svg';
import './style.css';

const App = (): JSX.Element => (
  <div>
    <h1>Hello Bokken</h1>
    <img src={Icon} alt="bokken" />
  </div>
);

export default App;
