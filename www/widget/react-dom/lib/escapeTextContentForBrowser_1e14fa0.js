define("node_modules/react-dom/lib/escapeTextContentForBrowser",function(e,r,t){"use strict";function n(e){var r=""+e,t=o.exec(r);if(!t)return r;var n,a="",s=0,c=0;for(s=t.index;s<r.length;s++){switch(r.charCodeAt(s)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==s&&(a+=r.substring(c,s)),c=s+1,a+=n}return c!==s?a+r.substring(c,s):a}function a(e){return"boolean"==typeof e||"number"==typeof e?""+e:n(e)}var o=/["'&<>]/;t.exports=a});