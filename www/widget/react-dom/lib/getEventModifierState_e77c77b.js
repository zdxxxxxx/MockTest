define("node_modules/react-dom/lib/getEventModifierState",function(t,e,i){"use strict";function r(t){var e=this,i=e.nativeEvent;if(i.getModifierState)return i.getModifierState(t);var r=o[t];return r?!!i[r]:!1}function n(){return r}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};i.exports=n});