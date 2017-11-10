define("src/pages/index.jsx",function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),o=e("node_modules/react/react"),r=n(o),l=e("src/components/checkbox.jsx"),d=(n(l),e("src/components/menu.jsx")),s=n(d),f=s.default.Item,h=s.default.SubMenu,p=function(e){function t(){c(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={MenuMap:[{id:"sub1",title:"工程研发部门",checked:!1,count:120,sub:[{id:"sub1$1",title:"Mac 开发工程师",count:9,checked:!1},{id:"sub1$2",title:"iOSApp 测试工程师",count:17,checked:!1},{id:"sub1$3",title:"Android 远程控制工程师",count:61,checked:!1},{id:"sub1$4",title:"Web 前端工程师",count:31,checked:!1},{id:"sub1$5",title:"Android 多媒体软件开发工程师",count:2,checked:!1}]},{id:"sub2",title:"产品设计部门",checked:!1,count:136,sub:[{id:"sub2$1",title:"网页设计师",count:47,checked:!1},{id:"sub2$2",title:"ID/工业设计师",count:39,checked:!1},{id:"sub2$3",title:"视觉设计师/GUI界面设计师",count:42,checked:!1},{id:"sub2$4",title:"平面设计师",count:8,checked:!1}]}]},e}return i(t,e),a(t,[{key:"subChecked",value:function(e,t){var n=this.state.MenuMap;n.map(function(n){if(n.id==e){n.checked=t;var c=n.sub;c.map(function(e){e.checked=t})}}),this.setState({MenuMap:n})}},{key:"itemChecked",value:function(e,t,n){var c=this.state.MenuMap;c.map(function(c){if(c.id==e){var u=c.sub;if(u.map(function(e){e.id==t&&(e.checked=n)}),n){var i=u.filter(function(e){return 0==e.checked});i.length||(c.checked=!0)}else c.checked=!1}}),this.setState({MenuMap:c})}},{key:"clearChecked",value:function(){var e=this.state.MenuMap;e.map(function(e){var t=e.sub;e.checked=!1,t.map(function(e){e.checked=!1})}),this.setState({MenuMap:e})}},{key:"render",value:function(){var e=this,t=this.state.MenuMap;return r.default.createElement("div",{"class":"content-wrapper"},r.default.createElement(s.default,{style:{width:340},head:r.default.createElement("div",null,r.default.createElement("span",{className:"menu-head"},"招聘职位"),r.default.createElement("a",{className:"menu-button",onClick:function(){e.clearChecked()}},"清空"))},t.map(function(t){var n=t.sub,c=t.title,u=t.id,i=t.checked,a=t.count,o=u;return r.default.createElement(h,{id:u,checked:i,title:r.default.createElement("span",{style:{display:"inline-block",paddingLeft:10,marginTop:5}},c),count:a,onChange:function(t,n){e.subChecked(t,n)}},n.map(function(t){var n=t.title,c=t.id,u=t.checked,i=t.count;return r.default.createElement(f,{id:c,checked:u,title:r.default.createElement("span",{style:{display:"inline-block",paddingLeft:10,marginTop:5}},n),count:i,onChange:function(t,n){e.itemChecked(o,t,n)}})}))})))}}]),t}(o.Component);t.default=p});