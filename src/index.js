import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDom from 'react-dom';

const Test = () => <div>Test</div>;

ReactDom.render(<Test />, document.getElementById('root'));
