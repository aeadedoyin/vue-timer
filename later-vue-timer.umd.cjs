(function(e,f){typeof exports=="object"&&typeof module<"u"?f(require("vue")):typeof define=="function"&&define.amd?define(["vue"],f):(e=typeof globalThis<"u"?globalThis:e||self,f(e.Vue))})(this,function(e){"use strict";const f={ms:1,s:1e3,m:1e3*60,h:1e3*60*60,"":1},g=(u,a)=>{const n=e.ref(6e4),m=e.ref(u.interval||1),r=e.ref(u.immediate),o=e.ref(Date.now()),p=e.ref(new Date),t=e.ref(0),l=e.ref(!1),s=e.ref(0),R=e.computed(()=>{const i=n.value-s.value;return i<=0?0:i}),E=e.ref(new Date(Date.now())),d=e.ref("Pending"),c=e.ref(!1),y={warn(...i){u.log&&console.warn(...i)}};setInterval(()=>{E.value=new Date(Date.now())},1),e.onUnmounted(()=>{clearInterval(t.value)});const N=()=>{if(c.value)return y.warn("Timer is already running"),!1;if(l.value)return y.warn("Timer already ended"),!1;o.value=Date.now()-s.value,t.value=setInterval(()=>{s.value>=n.value||n.value===0?(clearInterval(t.value),!l.value&&a&&a(),d.value="Ended",l.value=!0,c.value=!1):s.value=Date.now()-o.value},m.value),d.value="Resumed",c.value=!0},V=()=>{N(),d.value="Started"},S=(i,F=null)=>{if(r.value=F||r.value,typeof i=="string"){const U=parseInt(i),D=i.trim().replace(/[\d.]/g,"");if(D in f)n.value=U*f[D];else throw new Error(`Invalid time unit: '${D}'`)}if(i instanceof Date&&(n.value=i.getTime()-Date.now()),n.value<0&&i instanceof Date)return y.warn(`TTL: (${i.toLocaleString()}) cannot be in the past`),!1;if(p.value=new Date(Date.now()+(isFinite(n.value)?n.value:0)),r.value){if(d.value="Started",c.value||l.value)return k(),!1;V()}};S(u.ttl);const M=()=>{clearInterval(t.value),d.value="Paused",c.value=!1},A=()=>{!l.value&&a&&a(),s.value=0,d.value="Stopped",c.value=!1,clearInterval(t.value)},k=()=>{c.value=!1,l.value=!1,s.value=0,clearInterval(t.value),N(),d.value="Restarted"};return e.reactive({timerId:t,live:E,due:p,status:d,duration:n,used:s,left:R,isRunning:c,hasExpired:l,pause:M,resume:N,start:V,restart:k,stop:A,setTtl:S})},w=e.createElementVNode("h3",null,[e.createElementVNode("strong",null,"Hello UseTimer")],-1),h={style:{margin:"unset"}},x=e.createElementVNode("b",null,"Immediate Timer",-1),L=e.createElementVNode("hr",{style:{"max-width":"400px",margin:"30px 0"}},null,-1),T=e.createElementVNode("b",null,"Self Invoked Timer",-1),b=e.createElementVNode("br",null,null,-1),I={style:{display:"flex","flex-wrap":"wrap",gap:"10px"}},O=e.createElementVNode("hr",{style:{"max-width":"400px",margin:"30px 0"}},null,-1),$=e.createElementVNode("b",null,"Pick A DateTime",-1),C=e.createElementVNode("br",null,null,-1),P={style:{display:"flex","flex-wrap":"wrap",gap:"10px"}},_=e.defineComponent({__name:"App",setup(u){const a=()=>{const p=new Date().getTime(),t=1/6*60*1e3,l=1*60*1e3,s=p+Math.floor(Math.random()*(l-t+1)+t);return new Date(s)},n=[a(),a(),a(),a(),a(),a()],m=g({immediate:!0,ttl:n[5]}),r=g({ttl:"20000",log:!0}),o=g({immediate:!0,log:!0});return(p,t)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[w,e.createElementVNode("div",h,[x,e.createTextVNode(" - "+e.toDisplayString(e.unref(m).used)+" - Due: "+e.toDisplayString(e.unref(m).due.toLocaleString())+" ",1),e.createElementVNode("code",null,[e.createElementVNode("pre",null,e.toDisplayString(e.unref(m)),1)])]),L,e.createElementVNode("div",null,[T,e.createTextVNode(" - "+e.toDisplayString(e.unref(r).used)+" - Due: "+e.toDisplayString(e.unref(r).due.toLocaleString())+" ",1),e.createElementVNode("code",null,[e.createElementVNode("pre",null,e.toDisplayString(e.unref(r)),1)]),b,e.createElementVNode("div",I,[e.createElementVNode("button",{onClick:t[0]||(t[0]=l=>e.unref(r).start())},"Start"),e.createElementVNode("button",{onClick:t[1]||(t[1]=l=>e.unref(r).pause())},"Pause"),e.createElementVNode("button",{onClick:t[2]||(t[2]=l=>e.unref(r).stop())},"Stop"),e.createElementVNode("button",{onClick:t[3]||(t[3]=l=>e.unref(r).resume())},"Resume"),e.createElementVNode("button",{onClick:t[4]||(t[4]=l=>e.unref(r).restart())},"Restart")])]),O,e.createElementVNode("div",null,[$,e.createTextVNode(" - "+e.toDisplayString(e.unref(o).used)+" - Due: "+e.toDisplayString(e.unref(o).due.toLocaleString())+" ",1),e.createElementVNode("code",null,[e.createElementVNode("pre",null,e.toDisplayString(e.unref(o)),1)]),C,e.createElementVNode("div",P,[e.createElementVNode("button",{onClick:t[5]||(t[5]=l=>e.unref(o).setTtl(n[0]))},e.toDisplayString(n[0].toLocaleString()),1),e.createElementVNode("button",{onClick:t[6]||(t[6]=l=>e.unref(o).setTtl(n[1]))},e.toDisplayString(n[1].toLocaleString()),1),e.createElementVNode("button",{onClick:t[7]||(t[7]=l=>e.unref(o).setTtl(n[2]))},e.toDisplayString(n[2].toLocaleString()),1),e.createElementVNode("button",{onClick:t[8]||(t[8]=l=>e.unref(o).setTtl(n[3]))},e.toDisplayString(n[3].toLocaleString()),1),e.createElementVNode("button",{onClick:t[9]||(t[9]=l=>e.unref(o).setTtl(n[4]))},e.toDisplayString(n[4].toLocaleString()),1)])])],64))}});e.createApp(_).mount("#app")});
