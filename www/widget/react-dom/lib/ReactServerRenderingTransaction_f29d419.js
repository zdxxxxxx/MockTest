define("node_modules/react-dom/lib/ReactServerRenderingTransaction",function(e,t,n){"use strict";function o(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.useCreateElement=!1,this.updateQueue=new a(this)}var i=e("node_modules/object-assign/index"),u=e("node_modules/react-dom/lib/PooledClass"),r=e("node_modules/react-dom/lib/Transaction"),a=(e("node_modules/react-dom/lib/ReactInstrumentation"),e("node_modules/react-dom/lib/ReactServerUpdateQueue")),d=[],c={enqueue:function(){}},s={getTransactionWrappers:function(){return d},getReactMountReady:function(){return c},getUpdateQueue:function(){return this.updateQueue},destructor:function(){},checkpoint:function(){},rollback:function(){}};i(o.prototype,r,s),u.addPoolingTo(o),n.exports=o});