define("node_modules/fbjs/lib/isNode",function(e,o,n){"use strict";function t(e){var o=e?e.ownerDocument||e:document,n=o.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}n.exports=t});