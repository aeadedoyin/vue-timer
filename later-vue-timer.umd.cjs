(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r["@later/vue-timer"]={},r.Vue))})(this,function(r,e){"use strict";const p={ms:1,s:1e3,m:6e4,h:36e5,"":1},S=(o,v)=>{const t=e.ref(6e4),T=e.ref(o.interval||1),f=e.ref(o.immediate),D=e.ref(Date.now()),w=e.ref(new Date),u=e.ref(0),s=e.ref(!1),i=e.ref(0),x=e.computed(()=>{const a=t.value-i.value;return a<=0?0:a}),g=e.ref(new Date(Date.now())),n=e.ref("Pending"),l=e.ref(!1),c={warn(...a){o.log&&console.warn(...a)}};setInterval(()=>{g.value=new Date(Date.now())},1),e.onUnmounted(()=>{clearInterval(u.value)});const d=()=>{if(l.value)return c.warn("Timer is already running"),!1;if(s.value)return c.warn("Timer already ended"),!1;D.value=Date.now()-i.value,u.value=setInterval(()=>{i.value>=t.value||t.value===0?(clearInterval(u.value),!s.value&&v&&v(),n.value="Ended",s.value=!0,l.value=!1):i.value=Date.now()-D.value},T.value),n.value="Resumed",l.value=!0},I=()=>{d(),n.value="Started"},h=(a,R=null)=>{if(f.value=R||f.value,typeof a=="string"){const U=parseInt(a),m=a.trim().replace(/[\d.]/g,"");if(m in p)t.value=U*p[m];else throw new Error(`Invalid time unit: '${m}'`)}if(a instanceof Date&&(t.value=a.getTime()-Date.now()),t.value<0&&a instanceof Date)return c.warn(`TTL: (${a.toLocaleString()}) cannot be in the past`),!1;if(w.value=new Date(Date.now()+(isFinite(t.value)?t.value:0)),f.value){if(n.value="Started",l.value||s.value)return y(),!1;I()}};h(o.ttl);const E=()=>{clearInterval(u.value),n.value="Paused",l.value=!1},P=()=>{!s.value&&v&&v(),i.value=0,n.value="Stopped",l.value=!1,clearInterval(u.value)},y=()=>{l.value=!1,s.value=!1,i.value=0,clearInterval(u.value),d(),n.value="Restarted"};return e.reactive({timerId:u,live:g,due:w,status:n,duration:t,used:i,left:x,isRunning:l,hasExpired:s,pause:E,resume:d,start:I,restart:y,stop:P,setTtl:h})};r.useTimer=S,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
