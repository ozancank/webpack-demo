import _ from 'lodash';
import "./style.css";

//https://devnot.com/2021/webpack-nedir-webpacke-detayli-bir-bakis/

function component() {
  const element = document.createElement('span');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
