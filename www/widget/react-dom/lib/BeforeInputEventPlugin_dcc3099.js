define("node_modules/react-dom/lib/BeforeInputEventPlugin",function(t,e,o){"use strict";function n(){var t=window.opera;return"object"==typeof t&&"function"==typeof t.version&&parseInt(t.version(),10)<=12}function r(t){return(t.ctrlKey||t.altKey||t.metaKey)&&!(t.ctrlKey&&t.altKey)}function i(t){switch(t){case"topCompositionStart":return g.compositionStart;case"topCompositionEnd":return g.compositionEnd;case"topCompositionUpdate":return g.compositionUpdate}}function a(t,e){return"topKeyDown"===t&&e.keyCode===v}function p(t,e){switch(t){case"topKeyUp":return-1!==w.indexOf(e.keyCode);case"topKeyDown":return e.keyCode!==v;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function s(t){var e=t.detail;return"object"==typeof e&&"data"in e?e.data:null}function u(t,e,o,n){var r,u;if(h?r=i(t):M?p(t,o)&&(r=g.compositionEnd):a(t,o)&&(r=g.compositionStart),!r)return null;D&&(M||r!==g.compositionStart?r===g.compositionEnd&&M&&(u=M.getData()):M=y.getPooled(n));var d=C.getPooled(r,e,o,n);if(u)d.data=u;else{var c=s(o);null!==c&&(d.data=c)}return m.accumulateTwoPhaseDispatches(d),d}function d(t,e){switch(t){case"topCompositionEnd":return s(e);case"topKeyPress":var o=e.which;return o!==P?null:(S=!0,U);case"topTextInput":var n=e.data;return n===U&&S?null:n;default:return null}}function c(t,e){if(M){if("topCompositionEnd"===t||!h&&p(t,e)){var o=M.getData();return y.release(M),M=null,o}return null}switch(t){case"topPaste":return null;case"topKeyPress":return e.which&&!r(e)?String.fromCharCode(e.which):null;case"topCompositionEnd":return D?null:e.data;default:return null}}function l(t,e,o,n){var r;if(r=K?d(t,o):c(t,o),!r)return null;var i=b.getPooled(g.beforeInput,e,o,n);return i.data=r,m.accumulateTwoPhaseDispatches(i),i}var m=t("node_modules/react-dom/lib/EventPropagators"),f=t("node_modules/fbjs/lib/ExecutionEnvironment"),y=t("node_modules/react-dom/lib/FallbackCompositionState"),C=t("node_modules/react-dom/lib/SyntheticCompositionEvent"),b=t("node_modules/react-dom/lib/SyntheticInputEvent"),w=[9,13,27,32],v=229,h=f.canUseDOM&&"CompositionEvent"in window,E=null;f.canUseDOM&&"documentMode"in document&&(E=document.documentMode);var K=f.canUseDOM&&"TextEvent"in window&&!E&&!n(),D=f.canUseDOM&&(!h||E&&E>8&&11>=E),P=32,U=String.fromCharCode(P),g={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},S=!1,M=null,I={eventTypes:g,extractEvents:function(t,e,o,n){return[u(t,e,o,n),l(t,e,o,n)]}};o.exports=I});