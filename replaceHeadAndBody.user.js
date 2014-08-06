// ==UserScript==
// @name          replace head and body
// @namespace     http://shikakun.com
// @description   html の head 要素と body 要素を入れ替える
// @include       http://*
// @include       https://*
// @require       http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==
$(function() {
  var $head = $('head'),
      $body = $('body');
  $head.replaceWith('<body>' + $head.html() + '</body>');
  $body.replaceWith('<head>' + $body.html() + '</head>');
});
