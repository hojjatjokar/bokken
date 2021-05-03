import './style.css';
import Icon from './bokken.svg';
import another from './another';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hello webpack';
  element.classList.add('main');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  another({ title: 'Title', id: 1 });
  return element;
}

document.body.appendChild(component());