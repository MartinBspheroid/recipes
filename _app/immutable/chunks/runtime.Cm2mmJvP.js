var Cn=Array.isArray,Nn=Array.from,bn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Pn=Array.prototype,Xt=Object.getPrototypeOf;const Fn=()=>{};function Ln(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,j=8,ut=16,m=32,W=64,nt=128,S=256,G=512,h=1024,k=2048,H=4096,N=8192,b=16384,Jt=32768,Tt=65536,Mn=1<<17,Qt=1<<19,mt=1<<20,pt=Symbol("$state"),Yn=Symbol("legacy props"),jn=Symbol("");function At(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Un(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Gn(){X=!0}function ot(t){return{f:0,v:t,reactions:null,equals:At,version:0}}function Kn(t){return un(ot(t))}function $n(t,n=!1){var e;const r=ot(t);return n||(r.equals=gt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function un(t){return o!==null&&o.f&y&&(T===null?gn([t]):T.push(t)),t}function Zn(t,n){return o!==null&&_t()&&o.f&(y|ut)&&(T===null||!T.includes(t))&&an(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),kt(t,k),_t()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(A(u,k),tt(u)):g===null?kn([t]):g.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&k||!e&&a===u||(A(a,n),i&(h|S)&&(i&y?kt(a,H):tt(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const zn=1,Wn=2,Xn=16,Jn=1,Qn=2,tr=4,nr=8,rr=16,er=1,sr=2,fn="[",_n="[!",cn="]",xt={},lr=Symbol();let x=!1;function ar(t){x=t}let w;function F(t){if(t===null)throw Rt(),xt;return w=t}function ur(){return F(D(w))}function or(t){if(x){if(D(w)!==null)throw Rt(),xt;w=t}}function ir(t=1){if(x){for(var n=t,r=w;n--;)r=D(r);w=r}}function fr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=D(n);n.remove(),n=e}}var ht,St,Dt;function _r(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;St=vt(n,"firstChild").get,Dt=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return St.call(t)}function D(t){return Dt.call(t)}function cr(t,n){if(!x)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),F(e),e}return F(r),r}function vr(t,n){if(!x){var r=et(t);return r instanceof Comment&&r.data===""?D(r):r}return w}function pr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=D(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function hr(t){t.textContent=""}function vn(t){var n=y|k;u===null?n|=S:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function dr(t){const n=vn(t);return n.equals=gt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):P(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;z(pn(t));try{It(t),n=Gt(t)}finally{z(r)}return n}function Ct(t){var n=Ot(t),r=(I||t.f&S)&&t.deps!==null?H:h;A(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function it(t){It(t),Y(t,0),A(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&en(),o!==null&&o.f&S&&rn(),ft&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{dt(!0),Q(a),a.f|=Jt}catch(_){throw P(a),_}finally{dt(i)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!p&&!s&&e&&(l!==null&&hn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Er(t){const n=q(j,null,!1);return A(n,h),n.teardown=t,n}function yr(t){Nt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function wr(t){return Nt(),dn(t)}function Tr(t){const n=q(W,t,!0);return()=>{P(n)}}function bt(t){return q(wt,t,!1)}function dn(t){return q(j,t,!0)}function mr(t){return En(t)}function En(t,n=0){return q(j|ut|n,t,!0)}function Ar(t,n=!0){return q(j|m,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),Pt(t),Y(t,0),A(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gr(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{P(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Mt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Tt)!==0||(e.f&m)!==0;Mt(e,n,l?r:!1),e=s}}}function kr(t){Yt(t,!0)}function Yt(t,n){if(t.f&N){B(t)&&Q(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Tt)!==0||(r.f&m)!==0;Yt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,$=!1,st=[],lt=[];function jt(){K=!1;const t=st.slice();st=[],yt(t)}function Ht(){$=!1;const t=lt.slice();lt=[],yt(t)}function Rr(t){K||(K=!0,queueMicrotask(jt)),st.push(t)}function xr(t){$||($=!0,Tn(Ht)),lt.push(t)}function mn(){K&&jt(),$&&Ht()}const Bt=0,An=1;let U=!1,V=Bt,L=!1,M=null,O=!1,ft=!1;function dt(t){O=t}function Et(t){ft=t}let R=[],C=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let T=null;function gn(t){T=t}let v=null,E=0,g=null;function kn(t){g=t}let Ut=0,I=!1,f=null;function Vt(){return++Ut}function _t(){return!X||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&k)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Ct(l),e&&u!==null&&!I&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||A(t,h)}return!1}function Rn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw U=!1,t}function xn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&nt)===0)}function J(t,n,r,e){if(U){if(r===null&&(U=!1),xn(n))throw t;return}r!==null&&(U=!0);{Rn(t,n);return}}function Gt(t){var ct;var n=v,r=E,e=g,s=o,l=I,a=T,i=f,p=t.f;v=null,E=0,g=null,o=p&(m|W)?null:t,I=!O&&(p&S)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!I)for(c=E;c<_.length;c++)((ct=_[c]).reactions??(ct.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,I=l,T=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,H),n.f&(S|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function Q(t){var n=t.f;if(!(n&b)){A(t,h);var r=u,e=f;u=t;try{n&ut?yn(t):Ft(t),Pt(t),qt(t);var s=Gt(t);t.teardown=typeof s=="function"?s:null,t.version=Ut}catch(l){J(l,t,r,e||t.ctx)}finally{u=r}}}function Kt(){if(C>1e3){C=0;try{sn()}catch(t){if(M!==null)J(t,M,null);else throw t}}C++}function $t(t){var n=t.length;if(n!==0){Kt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Zt(s,l),Dn(l)}}finally{O=r}}}function Dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|N)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(s){J(s,e,null,e.ctx)}}}function In(){if(L=!1,C>1001)return;const t=R;R=[],$t(t),L||(C=0,M=null)}function tt(t){V===Bt&&(L||(L=!0,queueMicrotask(In))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}R.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&N))if(s&j){if(l)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&wt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Zt(p,n)}function zt(t){var n=V,r=R;try{Kt();const s=[];V=An,R=s,L=!1,$t(r);var e=t==null?void 0:t();return mn(),(R.length>0||s.length>0)&&zt(),C=0,M=null,e}finally{V=n,R=r}}async function Sr(){await Promise.resolve(),zt()}function Dr(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ot(t);return it(t),e}if(o!==null){T!==null&&T.includes(t)&&ln();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(t)&&(A(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&Ct(l)),t.v}function Ir(t){const n=o;try{return o=null,t()}finally{o=n}}const On=~(k|H|h);function A(t,n){t.f=t.f&On|n}function Or(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function Cr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),bt(l.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{hr as $,Nr as A,vn as B,Or as C,vr as D,Tt as E,mr as F,Cr as G,_n as H,cr as I,or as J,pr as K,jn as L,bn as M,Z as N,z as O,Cn as P,o as Q,u as R,_r as S,et as T,lr as U,fn as V,D as W,xt as X,cn as Y,Rt as Z,Hn as _,ur as a,Nn as a0,Tr as a1,rt as a2,er as a3,sr as a4,N as a5,on as a6,Mt as a7,wn as a8,P as a9,zt as aA,Sr as aB,Kn as aC,tn as aD,_t as aE,ot as aa,Wn as ab,zn as ac,Xn as ad,pt as ae,qn as af,Pn as ag,Un as ah,vt as ai,Vn as aj,bt as ak,dn as al,Rr as am,Bn as an,Mn as ao,tr as ap,gt as aq,m as ar,W as as,Jn as at,X as au,Qn as av,nr as aw,Yn as ax,dr as ay,rr as az,En as b,ar as c,kr as d,Ar as e,w as f,Gn as g,x as h,Fn as i,Dr as j,Zn as k,Xt as l,$n as m,ir as n,Wt as o,gr as p,xr as q,fr as r,F as s,Er as t,Ir as u,wr as v,yr as w,f as x,Ln as y,yt as z};
