// ==UserScript==
// @name Empty Script
// @version 19.6.2021.10.24
// @author Yorai Levi
// @description Example script for webpack and monkey integration
// @homepage https://github.com/YoraiLevi/SetFacebookPostsPrivate#readme
// @supportURL https://github.com/YoraiLevi/SetFacebookPostsPrivate/issues
// @run-at document-idle
// @grant GM_setValue
// @grant GM_getValue
// @grant GM.openInTab
// @include https://www.example.com/*
// ==/UserScript==

(()=>{"use strict";var e={852:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default="Hello Monkey"},426:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(852));console.log(u.default)}},t={};!function r(o){var u=t[o];if(void 0!==u)return u.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,r),l.exports}(426)})();