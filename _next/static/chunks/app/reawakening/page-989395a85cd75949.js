(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{58704:(e,r,t)=>{Promise.resolve().then(t.bind(t,6816))},76046:(e,r,t)=>{"use strict";var s=t(66658);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}})},6816:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>j});var s=t(95155),a=t(20177),n=t(35923),o=t(47634),l=t(31279),i=t(34872),c=t(48173),d=t.n(c),u=t(86092),h=t(79856),x=t(8190),m=t(17425),p=t(80063);function k(e){let{links:r}=e;return(0,s.jsxs)(a.Box,{className:"bg-gray-900 text-white py-6 px-4 my-8 rounded-md shadow-md",children:[(0,s.jsx)(o.Heading,{as:"h3",className:"text-lg font-bold mb-4 text-center text-gray-300 font-cinzel",children:"Explore More"}),(0,s.jsx)(m.Flex,{className:"justify-center flex-wrap gap-6",flexDirection:{base:"column",md:"row"},children:r.map(e=>(0,s.jsxs)(a.Box,{className:"text-center max-w-xs",children:[(0,s.jsx)(p.Link,{href:e.href,className:"text-brand-500 font-bold text-lg hover:underline",children:e.label}),e.description&&(0,s.jsx)(n.Text,{className:"text-sm text-gray-400 mt-2",children:e.description})]},e.href))})]})}function j(){return(0,s.jsxs)(a.Box,{className:"bg-background text-foreground",children:[(0,s.jsx)(h.A,{src:"/images/reawakening/reawakening-welcome-banner.png",alt:"Reawakening Event Banner"}),(0,s.jsx)(x.StaticBreadcrumbs,{routes:[{label:"Home",href:"/"},{label:"Reawakening",href:"#"}]}),(0,s.jsx)(a.Box,{className:"flex justify-center py-8 bottom-border",children:(0,s.jsx)(i.A,{src:"/images/reawakening/letter.jpeg",alt:"Letter from the Founders",className:"rounded-md shadow-lg max-w-[90%] md:max-w-[60%]"})}),(0,s.jsxs)(a.Box,{className:"page-section",children:[(0,s.jsx)(u.A,{src:"/images/reawakening/welcome-to-our-chronicle.png",alt:"Welcome to our chronicle"}),(0,s.jsxs)(n.Text,{className:"mb-4",children:[(0,s.jsx)("strong",{children:"Reawakening"})," is our upcoming premier live-action experience, leveraging the newest ",(0,s.jsx)("i",{children:"Vampire: The Masquerade"})," ","live-action ruleset. Join us when the chronicle kicks off on"," ",(0,s.jsx)("strong",{children:"March 1, 2025"}),"."]}),(0,s.jsx)(n.Text,{className:"mb-4",children:"Whether you're an experienced player or brand new to live-action gaming, we’d love to see you there!"})]}),(0,s.jsxs)(a.Box,{className:"page-section-alt",children:[(0,s.jsx)(o.Heading,{className:"section-heading",children:"What You’ll Need"}),(0,s.jsxs)(l.ListRoot,{className:"list-disc space-y-2",children:[(0,s.jsx)(l.ListItem,{children:"An approved character concept"}),(0,s.jsx)(l.ListItem,{children:"An approved character sheet using the v5 Laws of the Night rules"}),(0,s.jsx)(l.ListItem,{children:"An event ticket ($25 per event, or $100 for a Season Pass)"})]}),(0,s.jsx)(n.Text,{className:"mt-4",children:"Don’t worry! We will help you step-by-step with everything."})]}),(0,s.jsxs)(a.Box,{className:"page-section text-center mb-4",children:[(0,s.jsx)(o.Heading,{className:"section-heading",children:"Ready to Get Started?"}),(0,s.jsx)(d(),{href:"/reawakening/getting-started",className:"text-link inline-block",children:"Get Started Here"})]}),(0,s.jsx)(a.Box,{className:"page-section-alt",children:(0,s.jsx)(k,{links:[{label:"Character Creation",href:"/reawakening/character-creation",description:"Learn how to create your character and start your journey."},{label:"Character Advancement",href:"/reawakening/character-advancement",description:"Discover how to advance your character and unlock new abilities."},{label:"Supporting Cast",href:"/reawakening/supporting-cast",description:"Meet the important NPCs in the chronicle."},{label:"Custom Loresheets",href:"/reawakening/custom-loresheets",description:"Check out the custom loresheets available for your character."},{label:"City Timeline",href:"/reawakening/city-timeline",description:"Explore the history of Oklahoma City in the World of Darkness."}]})})]})}},34872:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(95155),a=t(31802),n=t(20309);let o=e=>{let{src:r,...t}=e,o=(0,a.d)(r);return(0,s.jsx)(n.Image,{src:o,...t})}},8190:(e,r,t)=>{"use strict";t.d(r,{StaticBreadcrumbs:()=>u});var s=t(95155),a=t(76046),n=t(19641),o=t(12115);let l=o.forwardRef(function(e,r){let{separator:t,separatorGap:a,children:l,...i}=e,c=o.Children.toArray(l).filter(o.isValidElement);return(0,s.jsx)(n.BreadcrumbRoot,{ref:r,...i,children:(0,s.jsx)(n.BreadcrumbList,{gap:a,children:c.map((e,r)=>{let a=r===c.length-1;return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(n.BreadcrumbItem,{children:e}),!a&&(0,s.jsx)(n.BreadcrumbSeparator,{children:t})]},r)})})})}),i=n.BreadcrumbLink,c=n.BreadcrumbCurrentLink;n.BreadcrumbEllipsis;var d=t(20177);let u=e=>{let{routes:r}=e,t=(0,a.usePathname)().startsWith("/reawakening"),n=t?"text-brand-500":"text-primary-orange";return(0,s.jsx)(l,{className:"!pl-8 !pt-4 font-bold ".concat(t?"font-della":"font-lex"),separator:(0,s.jsx)(d.Box,{className:"text-gray-500",children:" / "}),children:r.map((e,t)=>t===r.length-1?(0,s.jsx)(c,{className:"text-gray-500",children:e.label},t):(0,s.jsx)(i,{href:e.href,className:"".concat(n," hover:underline"),children:e.label},t))})}},79856:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(95155),a=t(20177);t(12115);var n=t(34872);let o=e=>{let{src:r,alt:t,className:o=""}=e;return(0,s.jsx)(a.Box,{className:"relative w-full overflow-hidden aspect-video bottom-border ".concat(o),children:(0,s.jsx)(n.A,{src:r,alt:t,className:"inset-0 w-full h-full object-cover"})})}},86092:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(95155),a=t(20177),n=t(34872);let o=e=>{let{src:r,alt:t,className:o=""}=e;return(0,s.jsx)(a.Box,{className:"".concat(o),textAlign:"center",my:8,children:(0,s.jsx)(n.A,{src:r,alt:t,className:"mx-auto w-5/6"})})}},31802:(e,r,t)=>{"use strict";function s(e){return"".concat("/stage.cola.games").concat(e)}t.d(r,{d:()=>s})},19641:(e,r,t)=>{"use strict";t.r(r),t.d(r,{BreadcrumbCurrentLink:()=>p,BreadcrumbEllipsis:()=>j,BreadcrumbItem:()=>x,BreadcrumbLink:()=>m,BreadcrumbList:()=>h,BreadcrumbPropsProvider:()=>u,BreadcrumbRoot:()=>d,BreadcrumbSeparator:()=>k,useBreadcrumbStyles:()=>i});var s=t(95155),a=t(51563),n=t(33036);let{withProvider:o,withContext:l,useStyles:i,PropsProvider:c}=(0,a.createSlotRecipeContext)({key:"breadcrumb"}),d=o("nav","root",{defaultProps:{"aria-label":"breadcrumb"}}),u=c,h=l("ol","list"),x=l("li","item"),m=l("a","link"),p=l("span","currentLink",{defaultProps:{role:"link","aria-current":"page"}}),k=l("li","separator",{defaultProps:{children:(0,s.jsx)(n.vK,{})}}),j=l("span","ellipsis",{defaultProps:{role:"presentation","aria-hidden":!0,children:(0,s.jsx)(n.Yt,{})}})},17425:(e,r,t)=>{"use strict";t.d(r,{Flex:()=>o});var s=t(95155),a=t(12115),n=t(23503);let o=(0,a.forwardRef)(function(e,r){let{direction:t,align:a,justify:o,wrap:l,basis:i,grow:c,shrink:d,inline:u,...h}=e;return(0,s.jsx)(n.chakra.div,{ref:r,...h,css:{display:u?"inline-flex":"flex",flexDirection:t,alignItems:a,justifyContent:o,flexWrap:l,flexBasis:i,flexGrow:c,flexShrink:d,...e.css}})})},33036:(e,r,t)=>{"use strict";t.d(r,{C1:()=>h,D3:()=>l,Gg:()=>k,Kp:()=>d,Mt:()=>o,Sr:()=>n,US:()=>j,Yt:()=>c,ZL:()=>u,cy:()=>p,id:()=>x,mo:()=>m,vK:()=>i});var s=t(95155),a=t(23503);let n=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"M20 6 9 17l-5-5"})}),o=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"m18 15-6-6-6 6"})}),l=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"m6 9 6 6 6-6"})}),i=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"m9 18 6-6-6-6"})}),c=e=>(0,s.jsxs)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,s.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,s.jsx)("circle",{cx:"5",cy:"12",r:"1"})]}),d=e=>(0,s.jsxs)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,s.jsx)("path",{d:"M12 19V5"})]}),u=e=>(0,s.jsxs)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{d:"M12 5v14"}),(0,s.jsx)("path",{d:"m19 12-7 7-7-7"})]}),h=e=>(0,s.jsx)(a.chakra.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"})}),x=e=>(0,s.jsx)(a.chakra.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"})}),m=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"0",...e,children:(0,s.jsx)("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"})}),p=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"})}),k=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),j=e=>(0,s.jsx)(a.chakra.svg,{viewBox:"0 0 24 24",fill:"currentColor",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"})})},80063:(e,r,t)=>{"use strict";t.d(r,{Link:()=>n,LinkPropsProvider:()=>o});let{withContext:s,PropsProvider:a}=(0,t(96700).createRecipeContext)({key:"link"}),n=s("a"),o=a},31279:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ListIndicator:()=>d,ListItem:()=>c,ListRoot:()=>l,ListRootPropsProvider:()=>i,useListStyles:()=>n});let{withProvider:s,withContext:a,useStyles:n,PropsProvider:o}=(0,t(51563).createSlotRecipeContext)({key:"list"}),l=s("ul","root",{defaultProps:{role:"list"}}),i=o,c=a("li","item"),d=a("span","indicator")},47634:(e,r,t)=>{"use strict";t.d(r,{Heading:()=>n,HeadingPropsProvider:()=>o});let{withContext:s,PropsProvider:a}=(0,t(96700).createRecipeContext)({key:"heading"}),n=s("h2"),o=a},35923:(e,r,t)=>{"use strict";t.d(r,{Text:()=>n,TextPropsProvider:()=>o});let{withContext:s,PropsProvider:a}=(0,t(96700).createRecipeContext)({key:"text"}),n=s("p"),o=a},51563:(e,r,t)=>{"use strict";t.d(r,{createSlotRecipeContext:()=>h});var s=t(95155),a=t(12115),n=t(82371),o=t(49497),l=t(20440),i=t(12994),c=t(23503),d=t(70192);let u=e=>e.charAt(0).toUpperCase()+e.slice(1),h=e=>{let{key:r,recipe:t}=e,h=u(r||t.className||"Component"),[x,m]=(0,n.createContext)({name:"".concat(h,"StylesContext"),errorMessage:"use".concat(h,"Styles returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(h,'.Root />" ')}),[p,k]=(0,n.createContext)({name:"".concat(h,"ClassNameContext"),errorMessage:"use".concat(h,"ClassNames returned is 'undefined'. Seems you forgot to wrap the components in \"<").concat(h,'.Root />" '),strict:!1}),[j,v]=(0,n.createContext)({strict:!1,name:"".concat(h,"PropsContext"),providerName:"".concat(h,"PropsContext"),defaultValue:{}});function f(e){let{unstyled:s,...a}=e,n=(0,d.useSlotRecipe)({key:r,recipe:a.recipe||t}),[o,l]=n.splitVariantProps(a);return{styles:s?i.u:n(o),classNames:n.classNameMap,props:l}}return{StylesProvider:x,ClassNamesProvider:p,PropsProvider:j,usePropsContext:v,useRecipeResult:f,withProvider:(e,r,t)=>{let{defaultProps:n,...i}=null!=t?t:{},d=(0,c.chakra)(e,{},i),u=(0,a.forwardRef)((e,a)=>{var i,c;let u=(0,o.v)(null!=n?n:{},v(),e),{styles:h,props:m,classNames:k}=f(u),j=k[r],g=(0,s.jsx)(x,{value:h,children:(0,s.jsx)(p,{value:k,children:(0,s.jsx)(d,{ref:a,...m,css:[h[r],u.css],className:(0,l.cx)(u.className,j)})})});return null!==(c=null==t?void 0:null===(i=t.wrapElement)||void 0===i?void 0:i.call(t,g,u))&&void 0!==c?c:g});return u.displayName=e.displayName||e.name,u},withContext:(e,r,t)=>{let n=(0,c.chakra)(e,{},t),o=(0,a.forwardRef)((e,t)=>{let a=m(),o=k(),i=null==o?void 0:o[r];return(0,s.jsx)(n,{...e,css:[r?a[r]:void 0,e.css],ref:t,className:(0,l.cx)(e.className,i)})});return o.displayName=e.displayName||e.name,o},withRootProvider:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{defaultProps:t}=r,a=r=>{let{styles:a,classNames:n,props:l}=f((0,o.v)(t,v(),r));return(0,s.jsx)(x,{value:a,children:(0,s.jsx)(p,{value:n,children:(0,s.jsx)(e,{...l})})})};return a.displayName=e.displayName||e.name,a},useStyles:m,useClassNames:k}}},70192:(e,r,t)=>{"use strict";t.d(r,{useSlotRecipe:()=>n});var s=t(12115),a=t(74408);function n(e){let{key:r,recipe:t}=e,n=(0,a.useChakraContext)();return(0,s.useMemo)(()=>{let e=t||(null!=r?n.getSlotRecipe(r):{});return n.sva(structuredClone(e))},[r,t,n])}}},e=>{var r=r=>e(e.s=r);e.O(0,[992,173,441,517,358],()=>r(58704)),_N_E=e.O()}]);