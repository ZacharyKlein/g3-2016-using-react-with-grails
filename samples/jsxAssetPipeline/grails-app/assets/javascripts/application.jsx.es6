//= require_self

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

import React from 'react';
import ReactDOM from 'react-dom'

require('whatwg-fetch/fetch');

import CommentBox from 'commentBox';

ReactDOM.render(<CommentBox />, document.getElementById('app'));