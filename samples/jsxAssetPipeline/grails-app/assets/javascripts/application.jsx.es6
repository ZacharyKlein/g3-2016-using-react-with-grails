//= require jquery-2.2.0.min
//= require bootstrap
//= require_self
//= require tree .

import React from 'react';
import ReactDOM from 'react-dom'

require('whatwg-fetch/fetch');

import CommentBox from './commentBox.jsx';

ReactDOM.render(<CommentBox />, document.getElementById('app'));