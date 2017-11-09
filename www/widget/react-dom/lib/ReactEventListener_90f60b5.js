define("node_modules/react-dom/lib/ReactEventListener",function(e,n,t){"use strict";function o(e){for(;e._hostParent;)e=e._hostParent;var n=c.getNodeFromInstance(e),t=n.parentNode;return c.getClosestInstanceFromNode(t)}function l(e,n){this.topLevelType=e,this.nativeEvent=n,this.ancestors=[]}function s(e){var n=b(e.nativeEvent),t=c.getClosestInstanceFromNode(n),l=t;do e.ancestors.push(l),l=l&&o(l);while(l);for(var s=0;s<e.ancestors.length;s++)t=e.ancestors[s],f._handleTopLevel(e.topLevelType,t,e.nativeEvent,b(e.nativeEvent))}function d(e){var n=p(window);e(n)}var a=e("node_modules/object-assign/index"),i=e("node_modules/fbjs/lib/EventListener"),r=e("node_modules/fbjs/lib/ExecutionEnvironment"),u=e("node_modules/react-dom/lib/PooledClass"),c=e("node_modules/react-dom/lib/ReactDOMComponentTree"),v=e("node_modules/react-dom/lib/ReactUpdates"),b=e("node_modules/react-dom/lib/getEventTarget"),p=e("node_modules/fbjs/lib/getUnboundedScrollPosition");a(l.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),u.addPoolingTo(l,u.twoArgumentPooler);var f={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:r.canUseDOM?window:null,setHandleTopLevel:function(e){f._handleTopLevel=e},setEnabled:function(e){f._enabled=!!e},isEnabled:function(){return f._enabled},trapBubbledEvent:function(e,n,t){return t?i.listen(t,n,f.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,n,t){return t?i.capture(t,n,f.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var n=d.bind(null,e);i.listen(window,"scroll",n)},dispatchEvent:function(e,n){if(f._enabled){var t=l.getPooled(e,n);try{v.batchedUpdates(s,t)}finally{l.release(t)}}}};t.exports=f});