define("node_modules/react-dom/lib/ReactDefaultBatchingStrategy",function(e,t,i){"use strict";function n(){this.reinitializeTransaction()}var a=e("node_modules/object-assign/index"),s=e("node_modules/react-dom/lib/ReactUpdates"),o=e("node_modules/react-dom/lib/Transaction"),c=e("node_modules/fbjs/lib/emptyFunction"),d={initialize:c,close:function(){p.isBatchingUpdates=!1}},r={initialize:c,close:s.flushBatchedUpdates.bind(s)},l=[r,d];a(n.prototype,o,{getTransactionWrappers:function(){return l}});var u=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,i,n,a,s){var o=p.isBatchingUpdates;return p.isBatchingUpdates=!0,o?e(t,i,n,a,s):u.perform(e,null,t,i,n,a,s)}};i.exports=p});