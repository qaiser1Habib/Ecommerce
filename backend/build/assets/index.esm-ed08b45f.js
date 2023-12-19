import{R as z}from"./index-769f51e0.js";var le=e=>e.type==="checkbox",re=e=>e instanceof Date,O=e=>e==null;const Ye=e=>typeof e=="object";var m=e=>!O(e)&&!Array.isArray(e)&&Ye(e)&&!re(e),ct=e=>m(e)&&e.target?le(e.target)?e.target.checked:e.target.value:e,dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yt=(e,u)=>e.has(dt(u)),ht=e=>{const u=e.constructor&&e.constructor.prototype;return m(u)&&u.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let u;const s=Array.isArray(e);if(e instanceof Date)u=new Date(e);else if(e instanceof Set)u=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(s||m(e)))if(u=s?[]:{},!s&&!ht(e))u=e;else for(const r in e)e.hasOwnProperty(r)&&(u[r]=$(e[r]));else return e;return u}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,u,s)=>{if(!u||!m(e))return s;const r=ae(u.split(/[,[\].]+?/)).reduce((a,l)=>O(a)?a:a[l],e);return S(r)||r===e?S(e[u])?s:e[u]:r},X=e=>typeof e=="boolean";const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};z.createContext(null);var gt=(e,u,s,r=!0)=>{const a={defaultValues:u._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const c=l;return u._proxyFormState[c]!==N.all&&(u._proxyFormState[c]=!r||N.all),s&&(s[c]=!0),e[c]}});return a},U=e=>m(e)&&!Object.keys(e).length,vt=(e,u,s,r)=>{s(e);const{name:a,...l}=e;return U(l)||Object.keys(l).length>=Object.keys(u).length||Object.keys(l).find(c=>u[c]===(!r||N.all))},Fe=e=>Array.isArray(e)?e:[e];function _t(e){const u=z.useRef(e);u.current=e,z.useEffect(()=>{const s=!e.disabled&&u.current.subject&&u.current.subject.subscribe({next:u.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var I=e=>typeof e=="string",Vt=(e,u,s,r,a)=>I(e)?(r&&u.watch.add(e),d(s,e,a)):Array.isArray(e)?e.map(l=>(r&&u.watch.add(l),d(s,l))):(r&&(u.watchAll=!0),s),pe=e=>/^\w*$/.test(e),Ze=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,u,s){let r=-1;const a=pe(u)?[u]:Ze(u),l=a.length,c=l-1;for(;++r<l;){const A=a[r];let b=s;if(r!==c){const L=e[A];b=m(L)||Array.isArray(L)?L:isNaN(+a[r+1])?{}:[]}e[A]=b,e=e[A]}return e}var bt=(e,u,s,r,a)=>u?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:a||!0}}:{};const me=(e,u,s)=>{for(const r of s||Object.keys(e)){const a=d(e,r);if(a){const{_f:l,...c}=a;if(l&&u(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else m(c)&&me(c,u)}}};var We=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),$e=(e,u,s)=>!s&&(u.watchAll||u.watch.has(e)||[...u.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),At=(e,u,s)=>{const r=ae(d(e,s));return x(r,"root",u[s]),x(e,s,r),e},Oe=e=>e.type==="file",G=e=>typeof e=="function",ce=e=>{if(!Ee)return!1;const u=e?e.ownerDocument:0;return e instanceof(u&&u.defaultView?u.defaultView.HTMLElement:HTMLElement)},fe=e=>I(e),Te=e=>e.type==="radio",de=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},ze={value:!0,isValid:!0};var je=e=>{if(Array.isArray(e)){if(e.length>1){const u=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:u,isValid:!!u.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ke}return Ke};const Ge={isValid:!1,value:null};var et=e=>Array.isArray(e)?e.reduce((u,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:u,Ge):Ge;function Je(e,u,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||X(e)&&!e)return{type:s,message:fe(e)?e:"",ref:u}}var te=e=>m(e)&&!de(e)?e:{value:e,message:""},Qe=async(e,u,s,r,a)=>{const{ref:l,refs:c,required:A,maxLength:b,minLength:L,min:Z,max:k,pattern:_,validate:K,name:C,valueAsNumber:ge,mount:oe,disabled:ve}=e._f,g=d(u,C);if(!oe||ve)return{};const M=c?c[0]:l,q=V=>{r&&M.reportValidity&&(M.setCustomValidity(X(V)?"":V||""),M.reportValidity())},E={},se=Te(l),j=le(l),_e=se||j,B=(ge||Oe(l))&&S(l.value)&&S(g)||ce(l)&&l.value===""||g===""||Array.isArray(g)&&!g.length,J=bt.bind(null,C,s,E),H=(V,v,w,T=W.maxLength,R=W.minLength)=>{const P=V?v:w;E[C]={type:V?T:R,message:P,ref:l,...J(V?T:R,P)}};if(a?!Array.isArray(g)||!g.length:A&&(!_e&&(B||O(g))||X(g)&&!g||j&&!je(c).isValid||se&&!et(c).isValid)){const{value:V,message:v}=fe(A)?{value:!!A,message:A}:te(A);if(V&&(E[C]={type:W.required,message:v,ref:M,...J(W.required,v)},!s))return q(v),E}if(!B&&(!O(Z)||!O(k))){let V,v;const w=te(k),T=te(Z);if(!O(g)&&!isNaN(g)){const R=l.valueAsNumber||g&&+g;O(w.value)||(V=R>w.value),O(T.value)||(v=R<T.value)}else{const R=l.valueAsDate||new Date(g),P=ue=>new Date(new Date().toDateString()+" "+ue),Q=l.type=="time",ie=l.type=="week";I(w.value)&&g&&(V=Q?P(g)>P(w.value):ie?g>w.value:R>new Date(w.value)),I(T.value)&&g&&(v=Q?P(g)<P(T.value):ie?g<T.value:R<new Date(T.value))}if((V||v)&&(H(!!V,w.message,T.message,W.max,W.min),!s))return q(E[C].message),E}if((b||L)&&!B&&(I(g)||a&&Array.isArray(g))){const V=te(b),v=te(L),w=!O(V.value)&&g.length>+V.value,T=!O(v.value)&&g.length<+v.value;if((w||T)&&(H(w,V.message,v.message),!s))return q(E[C].message),E}if(_&&!B&&I(g)){const{value:V,message:v}=te(_);if(de(V)&&!g.match(V)&&(E[C]={type:W.pattern,message:v,ref:l,...J(W.pattern,v)},!s))return q(v),E}if(K){if(G(K)){const V=await K(g,u),v=Je(V,M);if(v&&(E[C]={...v,...J(W.validate,v.message)},!s))return q(v.message),E}else if(m(K)){let V={};for(const v in K){if(!U(V)&&!s)break;const w=Je(await K[v](g,u),M,v);w&&(V={...w,...J(v,w.message)},q(w.message),s&&(E[C]=V))}if(!U(V)&&(E[C]={ref:M,...V},!s))return E}}return q(!0),E};function xt(e,u){const s=u.slice(0,-1).length;let r=0;for(;r<s;)e=S(e)?r++:e[u[r++]];return e}function Ft(e){for(const u in e)if(e.hasOwnProperty(u)&&!S(e[u]))return!1;return!0}function p(e,u){const s=Array.isArray(u)?u:pe(u)?[u]:Ze(u),r=s.length===1?e:xt(e,s),a=s.length-1,l=s[a];return r&&delete r[l],a!==0&&(m(r)&&U(r)||Array.isArray(r)&&Ft(r))&&p(e,s.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}}var ye=e=>O(e)||!Ye(e);function Y(e,u){if(ye(e)||ye(u))return e===u;if(re(e)&&re(u))return e.getTime()===u.getTime();const s=Object.keys(e),r=Object.keys(u);if(s.length!==r.length)return!1;for(const a of s){const l=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const c=u[a];if(re(l)&&re(c)||m(l)&&m(c)||Array.isArray(l)&&Array.isArray(c)?!Y(l,c):l!==c)return!1}}return!0}var tt=e=>e.type==="select-multiple",wt=e=>Te(e)||le(e),De=e=>ce(e)&&e.isConnected,rt=e=>{for(const u in e)if(G(e[u]))return!0;return!1};function he(e,u={}){const s=Array.isArray(e);if(m(e)||s)for(const r in e)Array.isArray(e[r])||m(e[r])&&!rt(e[r])?(u[r]=Array.isArray(e[r])?[]:{},he(e[r],u[r])):O(e[r])||(u[r]=!0);return u}function st(e,u,s){const r=Array.isArray(e);if(m(e)||r)for(const a in e)Array.isArray(e[a])||m(e[a])&&!rt(e[a])?S(u)||ye(s[a])?s[a]=Array.isArray(e[a])?he(e[a],[]):{...he(e[a])}:st(e[a],O(u)?{}:u[a],s[a]):s[a]=!Y(e[a],u[a]);return s}var Se=(e,u)=>st(e,u,he(u)),it=(e,{valueAsNumber:u,valueAsDate:s,setValueAs:r})=>S(e)?e:u?e===""?NaN:e&&+e:s&&I(e)?new Date(e):r?r(e):e;function ke(e){const u=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):u.disabled))return Oe(u)?u.files:Te(u)?et(e.refs).value:tt(u)?[...u.selectedOptions].map(({value:s})=>s):le(u)?je(e.refs).value:it(S(u.value)?e.ref.value:u.value,e)}var Dt=(e,u,s,r)=>{const a={};for(const l of e){const c=d(u,l);c&&x(a,l,c._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:r}},ne=e=>S(e)?e:de(e)?e.source:m(e)?de(e.value)?e.value.source:e.value:e,St=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,u,s){const r=d(e,s);if(r||pe(s))return{error:r,name:s};const a=s.split(".");for(;a.length;){const l=a.join("."),c=d(u,l),A=d(e,l);if(c&&!Array.isArray(c)&&s!==l)return{name:s};if(A&&A.type)return{name:l,error:A};a.pop()}return{name:s}}var kt=(e,u,s,r,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(u||e):(s?r.isOnBlur:a.isOnBlur)?!e:(s?r.isOnChange:a.isOnChange)?e:!0,mt=(e,u)=>!ae(d(e,u)).length&&p(e,u);const Et={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function pt(e={},u){let s={...Et,...e},r={submitCount:0,isDirty:!1,isLoading:G(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},l=m(s.defaultValues)||m(s.values)?$(s.defaultValues||s.values)||{}:{},c=s.shouldUnregister?{}:$(l),A={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,Z=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:we(),array:we(),state:we()},K=e.resetOptions&&e.resetOptions.keepDirtyValues,C=We(s.mode),ge=We(s.reValidateMode),oe=s.criteriaMode===N.all,ve=t=>i=>{clearTimeout(Z),Z=setTimeout(t,i)},g=async t=>{if(k.isValid||t){const i=s.resolver?U((await B()).errors):await H(a,!0);i!==r.isValid&&_.state.next({isValid:i})}},M=t=>k.isValidating&&_.state.next({isValidating:t}),q=(t,i=[],n,y,f=!0,o=!0)=>{if(y&&n){if(A.action=!0,o&&Array.isArray(d(a,t))){const h=n(d(a,t),y.argA,y.argB);f&&x(a,t,h)}if(o&&Array.isArray(d(r.errors,t))){const h=n(d(r.errors,t),y.argA,y.argB);f&&x(r.errors,t,h),mt(r.errors,t)}if(k.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const h=n(d(r.touchedFields,t),y.argA,y.argB);f&&x(r.touchedFields,t,h)}k.dirtyFields&&(r.dirtyFields=Se(l,c)),_.state.next({name:t,isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else x(c,t,i)},E=(t,i)=>{x(r.errors,t,i),_.state.next({errors:r.errors})},se=(t,i,n,y)=>{const f=d(a,t);if(f){const o=d(c,t,S(n)?d(l,t):n);S(o)||y&&y.defaultChecked||i?x(c,t,i?o:ke(f._f)):R(t,o),A.mount&&g()}},j=(t,i,n,y,f)=>{let o=!1,h=!1;const F={name:t};if(!n||y){k.isDirty&&(h=r.isDirty,r.isDirty=F.isDirty=v(),o=h!==F.isDirty);const D=Y(d(l,t),i);h=d(r.dirtyFields,t),D?p(r.dirtyFields,t):x(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,o=o||k.dirtyFields&&h!==!D}if(n){const D=d(r.touchedFields,t);D||(x(r.touchedFields,t,n),F.touchedFields=r.touchedFields,o=o||k.touchedFields&&D!==n)}return o&&f&&_.state.next(F),o?F:{}},_e=(t,i,n,y)=>{const f=d(r.errors,t),o=k.isValid&&X(i)&&r.isValid!==i;if(e.delayError&&n?(L=ve(()=>E(t,n)),L(e.delayError)):(clearTimeout(Z),L=null,n?x(r.errors,t,n):p(r.errors,t)),(n?!Y(f,n):f)||!U(y)||o){const h={...y,...o&&X(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},_.state.next(h)}M(!1)},B=async t=>s.resolver(c,s.context,Dt(t||b.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),J=async t=>{const{errors:i}=await B(t);if(t)for(const n of t){const y=d(i,n);y?x(r.errors,n,y):p(r.errors,n)}else r.errors=i;return i},H=async(t,i,n={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:o,...h}=f;if(o){const F=b.array.has(o.name),D=await Qe(f,c,oe,s.shouldUseNativeValidation&&!i,F);if(D[o.name]&&(n.valid=!1,i))break;!i&&(d(D,o.name)?F?At(r.errors,D,o.name):x(r.errors,o.name,D[o.name]):p(r.errors,o.name))}h&&await H(h,i,n)}}return n.valid},V=()=>{for(const t of b.unMount){const i=d(a,t);i&&(i._f.refs?i._f.refs.every(n=>!De(n)):!De(i._f.ref))&&Ve(t)}b.unMount=new Set},v=(t,i)=>(t&&i&&x(c,t,i),!Y(Le(),l)),w=(t,i,n)=>Vt(t,b,{...A.mount?c:S(i)?l:I(t)?{[t]:i}:i},n,i),T=t=>ae(d(A.mount?c:l,t,e.shouldUnregister?d(l,t,[]):[])),R=(t,i,n={})=>{const y=d(a,t);let f=i;if(y){const o=y._f;o&&(!o.disabled&&x(c,t,it(i,o)),f=ce(o.ref)&&O(i)?"":i,tt(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?le(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(F=>F===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Oe(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:t,values:{...c}})))}(n.shouldDirty||n.shouldTouch)&&j(t,f,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ue(t)},P=(t,i,n)=>{for(const y in i){const f=i[y],o=`${t}.${y}`,h=d(a,o);(b.array.has(t)||!ye(f)||h&&!h._f)&&!re(f)?P(o,f,n):R(o,f,n)}},Q=(t,i,n={})=>{const y=d(a,t),f=b.array.has(t),o=$(i);x(c,t,o),f?(_.array.next({name:t,values:{...c}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&_.state.next({name:t,dirtyFields:Se(l,c),isDirty:v(t,o)})):y&&!y._f&&!O(o)?P(t,o,n):R(t,o,n),$e(t,b)&&_.state.next({...r}),_.values.next({name:t,values:{...c}}),!A.mount&&u()},ie=async t=>{const i=t.target;let n=i.name,y=!0;const f=d(a,n),o=()=>i.type?ke(f._f):ct(t);if(f){let h,F;const D=o(),ee=t.type===He.BLUR||t.type===He.FOCUS_OUT,at=!St(f._f)&&!s.resolver&&!d(r.errors,n)&&!f._f.deps||kt(ee,d(r.touchedFields,n),r.isSubmitted,ge,C),Ae=$e(n,b,ee);x(c,n,D),ee?(f._f.onBlur&&f._f.onBlur(t),L&&L(0)):f._f.onChange&&f._f.onChange(t);const xe=j(n,D,ee,!1),ot=!U(xe)||Ae;if(!ee&&_.values.next({name:n,type:t.type,values:{...c}}),at)return k.isValid&&g(),ot&&_.state.next({name:n,...Ae?{}:xe});if(!ee&&Ae&&_.state.next({...r}),M(!0),s.resolver){const{errors:Ie}=await B([n]),ft=Xe(r.errors,a,n),qe=Xe(Ie,a,ft.name||n);h=qe.error,n=qe.name,F=U(Ie)}else h=(await Qe(f,c,oe,s.shouldUseNativeValidation))[n],y=Number.isNaN(D)||D===d(c,n,D),y&&(h?F=!1:k.isValid&&(F=await H(a,!0)));y&&(f._f.deps&&ue(f._f.deps),_e(n,F,h,xe))}},ue=async(t,i={})=>{let n,y;const f=Fe(t);if(M(!0),s.resolver){const o=await J(S(t)?t:f);n=U(o),y=t?!f.some(h=>d(o,h)):n}else t?(y=(await Promise.all(f.map(async o=>{const h=d(a,o);return await H(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&g()):y=n=await H(a);return _.state.next({...!I(t)||k.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors,isValidating:!1}),i.shouldFocus&&!y&&me(a,o=>o&&d(r.errors,o),t?f:b.mount),y},Le=t=>{const i={...l,...A.mount?c:{}};return S(t)?i:I(t)?d(i,t):t.map(n=>d(i,n))},Ce=(t,i)=>({invalid:!!d((i||r).errors,t),isDirty:!!d((i||r).dirtyFields,t),isTouched:!!d((i||r).touchedFields,t),error:d((i||r).errors,t)}),ut=t=>{t&&Fe(t).forEach(i=>p(r.errors,i)),_.state.next({errors:t?r.errors:{}})},Re=(t,i,n)=>{const y=(d(a,t,{_f:{}})._f||{}).ref;x(r.errors,t,{...i,ref:y}),_.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&y&&y.focus&&y.focus()},nt=(t,i)=>G(t)?_.values.subscribe({next:n=>t(w(void 0,i),n)}):w(t,i,!0),Ve=(t,i={})=>{for(const n of t?Fe(t):b.mount)b.mount.delete(n),b.array.delete(n),i.keepValue||(p(a,n),p(c,n)),!i.keepError&&p(r.errors,n),!i.keepDirty&&p(r.dirtyFields,n),!i.keepTouched&&p(r.touchedFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&p(l,n);_.values.next({values:{...c}}),_.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&g()},Ue=({disabled:t,name:i,field:n,fields:y})=>{if(X(t)){const f=t?void 0:d(c,i,ke(n?n._f:d(y,i)._f));x(c,i,f),j(i,f,!1,!1,!0)}},be=(t,i={})=>{let n=d(a,t);const y=X(i.disabled);return x(a,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),b.mount.add(t),n?Ue({field:n,disabled:i.disabled,name:t}):se(t,!0,i.value),{...y?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){be(t,i),n=d(a,t);const o=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=wt(o),F=n._f.refs||[];if(h?F.find(D=>D===o):o===n._f.ref)return;x(a,t,{_f:{...n._f,...h?{refs:[...F.filter(De),o,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else n=d(a,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(yt(b.array,t)&&A.action)&&b.unMount.add(t)}}},Me=()=>s.shouldFocusError&&me(a,t=>t&&d(r.errors,t),b.mount),Ne=(t,i)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let y=$(c);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:o}=await B();r.errors=f,y=o}else await H(a);p(r.errors,"root"),U(r.errors)?(_.state.next({errors:{}}),await t(y,n)):(i&&await i({...r.errors},n),Me(),setTimeout(Me)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors),submitCount:r.submitCount+1,errors:r.errors})},lt=(t,i={})=>{d(a,t)&&(S(i.defaultValue)?Q(t,d(l,t)):(Q(t,i.defaultValue),x(l,t,i.defaultValue)),i.keepTouched||p(r.touchedFields,t),i.keepDirty||(p(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,d(l,t)):v()),i.keepError||(p(r.errors,t),k.isValid&&g()),_.state.next({...r}))},Be=(t,i={})=>{const n=t?$(t):l,y=$(n),f=t&&!U(t)?y:l;if(i.keepDefaultValues||(l=n),!i.keepValues){if(i.keepDirtyValues||K)for(const o of b.mount)d(r.dirtyFields,o)?x(f,o,d(c,o)):Q(o,d(f,o));else{if(Ee&&S(t))for(const o of b.mount){const h=d(a,o);if(h&&h._f){const F=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ce(F)){const D=F.closest("form");if(D){D.reset();break}}}}a={}}c=e.shouldUnregister?i.keepDefaultValues?$(l):{}:$(f),_.array.next({values:{...f}}),_.values.next({values:{...f}})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!A.mount&&u(),A.mount=!k.isValid||!!i.keepIsValid,A.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!Y(t,l)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:i.keepDirtyValues?r.dirtyFields:i.keepDefaultValues&&t?Se(l,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(t,i)=>Be(G(t)?t(c):t,i);return{control:{register:be,unregister:Ve,getFieldState:Ce,handleSubmit:Ne,setError:Re,_executeSchema:B,_getWatch:w,_getDirty:v,_updateValid:g,_removeUnmounted:V,_updateFieldArray:q,_updateDisabledField:Ue,_getFieldArray:T,_reset:Be,_resetDefaultValues:()=>G(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:_,_proxyFormState:k,get _fields(){return a},get _formValues(){return c},get _state(){return A},set _state(t){A=t},get _defaultValues(){return l},get _names(){return b},set _names(t){b=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ue,register:be,handleSubmit:Ne,watch:nt,setValue:Q,getValues:Le,reset:Pe,resetField:lt,clearErrors:ut,unregister:Ve,setError:Re,setFocus:(t,i={})=>{const n=d(a,t),y=n&&n._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ce}}function Rt(e={}){const u=z.useRef(),s=z.useRef(),[r,a]=z.useState({isDirty:!1,isValidating:!1,isLoading:G(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:G(e.defaultValues)?void 0:e.defaultValues});u.current||(u.current={...pt(e,()=>a(c=>({...c}))),formState:r});const l=u.current.control;return l._options=e,_t({subject:l._subjects.state,next:c=>{vt(c,l._proxyFormState,l._updateFormState,!0)&&a({...l._formState})}}),z.useEffect(()=>{e.values&&!Y(e.values,s.current)?(l._reset(e.values,l._options.resetOptions),s.current=e.values):l._resetDefaultValues()},[e.values,l]),z.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),u.current.formState=gt(r,l),u.current}export{Rt as u};
