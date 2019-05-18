import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './CommonStyles/normalize.css';
import './CommonStyles/common.less';
import './index.less';
import {App} from "./App/App";

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);