define("node_modules/react-dom/lib/ReactReconciler",function(e,t,n){"use strict";function o(){r.attachRefs(this,this._currentElement)}var r=e("node_modules/react-dom/lib/ReactRef"),u=(e("node_modules/react-dom/lib/ReactInstrumentation"),e("node_modules/fbjs/lib/warning"),{mountComponent:function(e,t,n,r,u,c){var m=e.mountComponent(t,n,r,u,c);return e._currentElement&&null!=e._currentElement.ref&&t.getReactMountReady().enqueue(o,e),m},getHostNode:function(e){return e.getHostNode()},unmountComponent:function(e,t){r.detachRefs(e,e._currentElement),e.unmountComponent(t)},receiveComponent:function(e,t,n,u){var c=e._currentElement;if(t!==c||u!==e._context){var m=r.shouldUpdateRefs(c,t);m&&r.detachRefs(e,c),e.receiveComponent(t,n,u),m&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(o,e)}},performUpdateIfNecessary:function(e,t,n){e._updateBatchNumber===n&&e.performUpdateIfNecessary(t)}});n.exports=u});