define("node_modules/react-dom/lib/dangerousStyleValue",function(e,r,n){"use strict";function o(e,r,n,o){var t=null==r||"boolean"==typeof r||""===r;if(t)return"";var s=isNaN(r);if(o||s||0===r||i.hasOwnProperty(e)&&i[e])return""+r;if("string"==typeof r){r=r.trim()}return r+"px"}var t=e("node_modules/react-dom/lib/CSSProperty"),i=(e("node_modules/fbjs/lib/warning"),t.isUnitlessNumber);n.exports=o});