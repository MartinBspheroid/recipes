import{M as k,N as O,O as A,P as C,Q as H,R as V,S as b,T as P,V as $,W,X as T,c as g,s as D,a as j,f as v,Y as q,Z as B,_ as G,$ as Q,a0 as X,a1 as Z,a2 as z,e as F,C as J,h as E,G as K,x as U}from"./runtime.Cm2mmJvP.js";import{b as x}from"./disclose-version.CBfss8Iz.js";const I=new Set,S=new Set;function sr(r){for(var a=0;a<r.length;a++)I.add(r[a]);for(var n of S)n(r)}function m(r){var R;var a=this,n=a.ownerDocument,_=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],e=i[0]||r.target,d=0,h=r.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var l=i.indexOf(a);if(l===-1)return;u<=l&&(d=u)}if(e=i[d]||r.target,e!==a){k(r,"currentTarget",{configurable:!0,get(){return e||n}});var w=H,o=V;O(null),A(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(C(c)){var[M,...Y]=c;M.apply(e,[r,...Y])}else c.call(e,r)}catch(y){t?s.push(y):t=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,O(w),A(o)}}}const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}function or(r,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function er(r,a){return L(r,a)}function ir(r,a){b(),a.intro=a.intro??!1;const n=a.target,_=E,i=v;try{for(var e=P(n);e&&(e.nodeType!==8||e.data!==$);)e=W(e);if(!e)throw T;g(!0),D(e),j();const d=L(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw B(),T;return g(!1),d}catch(d){if(d===T)return a.recover===!1&&G(),b(),Q(n),g(!1),er(r,a);throw d}finally{g(_),D(i)}}const p=new Map;function L(r,{target:a,anchor:n,props:_={},events:i,context:e,intro:d=!0}){b();var h=new Set,u=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!h.has(s)){h.add(s);var f=ar(s);a.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(X(I)),S.add(u);var l=void 0,w=Z(()=>{var o=n??a.appendChild(z());return F(()=>{if(e){J({});var t=U;t.c=e}i&&(_.$$events=i),E&&x(o,null),l=r(o,_)||{},E&&(V.nodes_end=v),e&&K()}),()=>{var f;for(var t of h){a.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}S.delete(u),N.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(l,w),l}let N=new WeakMap;function fr(r){const a=N.get(r);a&&a()}export{sr as d,ir as h,er as m,or as s,fr as u};