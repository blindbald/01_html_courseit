!function(){function n(n){const{message:o,filename:t,lineno:i,colno:s}=n;if(e.test(t)){const n={topic:HUB_EVENTS.PEN_ERROR_RUNTIME,data:{message:o,filename:t,lineno:i,colno:s}};window.parent.postMessage(n,"*")}}window.addEventListener("error",n);const e=/(pen.js|index.html)/;window.__handleRuntimeErrors=n}();