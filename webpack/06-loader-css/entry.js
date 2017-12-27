import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import style from './style.css';  //这个css打包后加载到index.html中

render(<Greeter />, document.getElementById('root'));

