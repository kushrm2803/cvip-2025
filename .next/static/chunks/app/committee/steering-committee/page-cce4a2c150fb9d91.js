(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{9606:(e,t,i)=>{Promise.resolve().then(i.bind(i,9700))},9700:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(5155),a=i(2115),n=i(4273),l=i(91),o=i(9124);let s=()=>{let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsxs)("div",{className:"min-h-screen bg-gray-100 py-12 px-6",children:[(0,r.jsx)(l.default,{title:"Steering Committee",imageUrl:"/iitropar-pics/iitropar-pic-7.jpg"}),(0,r.jsx)(o.P.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto mt-4",children:[{name:"Dr. Elizabeth Green",role:"Senior Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/elizabeth"},{name:"Dr. Michael Lee",role:"Technical Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/michael"},{name:"Dr. Susan White",role:"Strategic Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/susan"},{name:"Dr. David Brown",role:"External Relations Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/david"},{name:"Dr. Anna Black",role:"Research Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/anna"},{name:"Dr. Elizabeth Green",role:"Senior Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/elizabeth"},{name:"Dr. Dustin Green",role:"Senior Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/elizabeth"},{name:"Dr. Elizabeth Jacob",role:"Senior Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/elizabeth"},{name:"Dr. Eliz Green",role:"Senior Advisor",image:"/committee/avatar.png",link:"https://scholar.google.com/elizabeth"}].map((e,t)=>(0,r.jsx)(n.A,{name:e.name,role:e.role,image:e.image,link:e.link},t))})]}):null}},91:(e,t,i)=>{"use strict";i.d(t,{default:()=>o});var r=i(5155);i(2115);var a=i(5683),n=i(9124),l=i(5565);let o=e=>{let{title:t,imageUrl:i}=e;return(0,r.jsx)("div",{className:"my-5",children:(0,r.jsx)(a.N,{mode:"wait",children:(0,r.jsxs)(n.P.div,{className:"relative h-[50vh]",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[(0,r.jsx)(l.default,{src:i,alt:t,layout:"fill",objectFit:"cover"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-black opacity-60"}),(0,r.jsx)(n.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1},className:"absolute inset-0 flex items-center justify-center",children:(0,r.jsx)("h1",{className:"text-white text-4xl md:text-6xl font-bold text-center",children:t})})]},t)})})}},4273:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var r=i(5155);i(2115);var a=i(9124),n=i(5565);let l=e=>{let{name:t,role:i,image:l,link:o}=e;return(0,r.jsxs)(a.P.div,{className:"relative bg-white shadow-lg rounded-lg overflow-hidden group",whileHover:{scale:1.02},transition:{duration:.3},children:[(0,r.jsx)("div",{className:"relative w-full h-48",children:(0,r.jsx)(n.default,{src:l,alt:t,fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-contain"})}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold",children:t}),(0,r.jsx)("p",{className:"text-gray-600",children:i})]}),(0,r.jsx)(a.P.div,{className:"absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,r.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-white text-lg font-semibold underline",children:"View Profile"})})]})}},5683:(e,t,i)=>{"use strict";i.d(t,{N:()=>v});var r=i(5155),a=i(2115),n=i(4710),l=i(9234),o=i(9656),s=i(7249);class c extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,i=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=i-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:i,anchorX:n}=e,l=(0,a.useId)(),o=(0,a.useRef)(null),d=(0,a.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:h}=(0,a.useContext)(s.Q);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:a,right:s}=d.current;if(i||!o.current||!e||!t)return;o.current.dataset.motionPopId=l;let c=document.createElement("style");return h&&(c.nonce=h),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(l,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===n?"left: ".concat(a):"right: ".concat(s),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[i]),(0,r.jsx)(c,{isPresent:i,childRef:o,sizeRef:d,children:a.cloneElement(t,{ref:o})})}let h=e=>{let{children:t,initial:i,isPresent:n,onExitComplete:s,custom:c,presenceAffectsLayout:h,mode:u,anchorX:p}=e,g=(0,l.M)(m),f=(0,a.useId)(),v=(0,a.useCallback)(e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;s&&s()},[g,s]),x=(0,a.useMemo)(()=>({id:f,initial:i,isPresent:n,custom:c,onExitComplete:v,register:e=>(g.set(e,!1),()=>g.delete(e))}),h?[Math.random(),v]:[n,v]);return(0,a.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[n]),a.useEffect(()=>{n||g.size||!s||s()},[n]),"popLayout"===u&&(t=(0,r.jsx)(d,{isPresent:n,anchorX:p,children:t})),(0,r.jsx)(o.t.Provider,{value:x,children:t})};function m(){return new Map}var u=i(5087);let p=e=>e.key||"";function g(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var f=i(5403);let v=e=>{let{children:t,custom:i,initial:o=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:m=!1,anchorX:v="left"}=e,[x,b]=(0,u.xQ)(m),j=(0,a.useMemo)(()=>g(t),[t]),y=m&&!x?[]:j.map(p),w=(0,a.useRef)(!0),k=(0,a.useRef)(j),E=(0,l.M)(()=>new Map),[N,P]=(0,a.useState)(j),[z,A]=(0,a.useState)(j);(0,f.E)(()=>{w.current=!1,k.current=j;for(let e=0;e<z.length;e++){let t=p(z[e]);y.includes(t)?E.delete(t):!0!==E.get(t)&&E.set(t,!1)}},[z,y.length,y.join("-")]);let C=[];if(j!==N){let e=[...j];for(let t=0;t<z.length;t++){let i=z[t],r=p(i);y.includes(r)||(e.splice(t,0,i),C.push(i))}"wait"===d&&C.length&&(e=C),A(g(e)),P(j);return}let{forceRender:D}=(0,a.useContext)(n.L);return(0,r.jsx)(r.Fragment,{children:z.map(e=>{let t=p(e),a=(!m||!!x)&&(j===z||y.includes(t));return(0,r.jsx)(h,{isPresent:a,initial:(!w.current||!!o)&&void 0,custom:a?void 0:i,presenceAffectsLayout:c,mode:d,onExitComplete:a?void 0:()=>{if(!E.has(t))return;E.set(t,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(null==D||D(),A(k.current),m&&(null==b||b()),s&&s())},anchorX:v,children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[124,565,441,517,358],()=>t(9606)),_N_E=e.O()}]);