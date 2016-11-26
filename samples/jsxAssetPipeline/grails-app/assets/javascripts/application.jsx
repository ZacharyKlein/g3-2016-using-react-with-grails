//= require jquery-2.2.0.min
//= require bootstrap
//= require_self
//= require tree .

var React = require('react');
var ReactDOM = require('react-dom');

var cb = require('commentBox');
var cl = require('commentList');
var cf = require('commentForm');
var c = require('comment');



ReactDOM.render(
  <cb.CommentBox />,
  document.getElementById('app')
);