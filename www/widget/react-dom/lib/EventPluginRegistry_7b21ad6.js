define("node_modules/react-dom/lib/EventPluginRegistry",function(e,n,i){"use strict";function r(){if(s)for(var e in v){var n=v[e],i=s.indexOf(e);if(i>-1?void 0:o("96",e),!l.plugins[i]){n.extractEvents?void 0:o("97",e),l.plugins[i]=n;var r=n.eventTypes;for(var a in r)t(r[a],n,a)?void 0:o("98",a,e)}}}function t(e,n,i){l.eventNameDispatchConfigs.hasOwnProperty(i)?o("99",i):void 0,l.eventNameDispatchConfigs[i]=e;var r=e.phasedRegistrationNames;if(r){for(var t in r)if(r.hasOwnProperty(t)){var s=r[t];a(s,n,i)}return!0}return e.registrationName?(a(e.registrationName,n,i),!0):!1}function a(e,n,i){l.registrationNameModules[e]?o("100",e):void 0,l.registrationNameModules[e]=n,l.registrationNameDependencies[e]=n.eventTypes[i].dependencies}var o=e("node_modules/react-dom/lib/reactProdInvariant"),s=(e("node_modules/fbjs/lib/invariant"),null),v={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(e){s?o("101"):void 0,s=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var n=!1;for(var i in e)if(e.hasOwnProperty(i)){var t=e[i];v.hasOwnProperty(i)&&v[i]===t||(v[i]?o("102",i):void 0,v[i]=t,n=!0)}n&&r()},getPluginModuleForEvent:function(e){var n=e.dispatchConfig;if(n.registrationName)return l.registrationNameModules[n.registrationName]||null;if(void 0!==n.phasedRegistrationNames){var i=n.phasedRegistrationNames;for(var r in i)if(i.hasOwnProperty(r)){var t=l.registrationNameModules[i[r]];if(t)return t}}return null},_resetEventPlugins:function(){s=null;for(var e in v)v.hasOwnProperty(e)&&delete v[e];l.plugins.length=0;var n=l.eventNameDispatchConfigs;for(var i in n)n.hasOwnProperty(i)&&delete n[i];var r=l.registrationNameModules;for(var t in r)r.hasOwnProperty(t)&&delete r[t]}};i.exports=l});