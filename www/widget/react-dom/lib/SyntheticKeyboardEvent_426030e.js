define("node_modules/react-dom/lib/SyntheticKeyboardEvent",function(e,t,n){"use strict";function o(e,t,n,o){return l.call(this,e,t,n,o)}var l=e("node_modules/react-dom/lib/SyntheticUIEvent"),d=e("node_modules/react-dom/lib/getEventCharCode"),r=e("node_modules/react-dom/lib/getEventKey"),u=e("node_modules/react-dom/lib/getEventModifierState"),y={key:r,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?d(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?d(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};l.augmentClass(o,y),n.exports=o});