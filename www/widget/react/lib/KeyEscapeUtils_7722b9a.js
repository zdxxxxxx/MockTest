define("node_modules/react/lib/KeyEscapeUtils",function(e,n,r){"use strict";function t(e){var n=/[=:]/g,r={"=":"=0",":":"=2"},t=(""+e).replace(n,function(e){return r[e]});return"$"+t}function u(e){var n=/(=0|=2)/g,r={"=0":"=","=2":":"},t=e.substring("."===e[0]&&"$"===e[1]?2:1);return(""+t).replace(n,function(e){return r[e]})}var c={escape:t,unescape:u};r.exports=c});