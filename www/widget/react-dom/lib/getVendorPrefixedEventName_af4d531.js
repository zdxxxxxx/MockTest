define("node_modules/react-dom/lib/getVendorPrefixedEventName",function(n,i,t){"use strict";function e(n,i){var t={};return t[n.toLowerCase()]=i.toLowerCase(),t["Webkit"+n]="webkit"+i,t["Moz"+n]="moz"+i,t["ms"+n]="MS"+i,t["O"+n]="o"+i.toLowerCase(),t}function o(n){if(m[n])return m[n];if(!r[n])return n;var i=r[n];for(var t in i)if(i.hasOwnProperty(t)&&t in d)return m[n]=i[t];return""}var a=n("node_modules/fbjs/lib/ExecutionEnvironment"),r={animationend:e("Animation","AnimationEnd"),animationiteration:e("Animation","AnimationIteration"),animationstart:e("Animation","AnimationStart"),transitionend:e("Transition","TransitionEnd")},m={},d={};a.canUseDOM&&(d=document.createElement("div").style,"AnimationEvent"in window||(delete r.animationend.animation,delete r.animationiteration.animation,delete r.animationstart.animation),"TransitionEvent"in window||delete r.transitionend.transition),t.exports=o});