define("node_modules/react-dom/lib/getEventTarget",function(e,n,t){"use strict";function r(e){var n=e.target||e.srcElement||window;return n.correspondingUseElement&&(n=n.correspondingUseElement),3===n.nodeType?n.parentNode:n}t.exports=r});