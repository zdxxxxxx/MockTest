define("node_modules/fbjs/lib/createNodesFromMarkup",function(e,r,n){"use strict";function o(e){var r=e.match(u);return r&&r[1].toLowerCase()}function i(e,r){var n=d;d?void 0:s(!1);var i=o(e),a=i&&l(i);if(a){n.innerHTML=a[1]+e+a[2];for(var u=a[0];u--;)n=n.lastChild}else n.innerHTML=e;var m=n.getElementsByTagName("script");m.length&&(r?void 0:s(!1),t(m).forEach(r));for(var c=Array.from(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return c}var a=e("node_modules/fbjs/lib/ExecutionEnvironment"),t=e("node_modules/fbjs/lib/createArrayFromMixed"),l=e("node_modules/fbjs/lib/getMarkupWrap"),s=e("node_modules/fbjs/lib/invariant"),d=a.canUseDOM?document.createElement("div"):null,u=/^\s*<(\w+)/;n.exports=i});