(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5418],{41938:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cropping-calendar-v2",function(){return n(14869)}])},43370:function(e,r,n){"use strict";var a=n(85893),o=n(9008),t=n(47426);r.Z=function(e){var r=e.title,n=e.ogDescription,l=e.ogImageURL,c=e.ogImgAlt,i=void 0===c?"Picture":c,s=e.ogSiteName,p=void 0===s?"ACAP-".concat(t.Gt.toUpperCase()):s,d=e.ogURL,u=e.canonicalURL,x=void 0===u?"http://localhost":u;return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{rel:"canonical",href:x}),(0,a.jsx)("meta",{name:"og:description",content:n}),(0,a.jsx)("meta",{property:"og:title",content:r}),(0,a.jsx)("meta",{property:"og:site_name",content:p}),(0,a.jsx)("meta",{property:"og:image",content:l}),(0,a.jsx)("meta",{property:"og:image:width",content:"600"}),(0,a.jsx)("meta",{property:"og:image:height",content:"315"}),(0,a.jsx)("meta",{property:"og:image:alt",content:i}),(0,a.jsx)("meta",{property:"og:url",content:d}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:r}),(0,a.jsx)("meta",{name:"twitter:image",content:l}),(0,a.jsx)("title",{children:r})]})}},37634:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var a=n(85893),o=n(25675),t=n(87357),l=n(15861),c=n(26660),i={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var s=function(e){var r=e.message,n=void 0===r?"Failed to load data":r,s=e.style,p=void 0===s?{}:s;return(0,a.jsxs)(t.Z,{sx:i.container,style:p,children:[(0,a.jsx)(o.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,a.jsx)(l.Z,{variant:"subtitle1",children:n})]})}},53577:function(e,r,n){"use strict";var a=n(85893),o=n(87357),t=n(98456);r.Z=function(e){var r=e.text,n=void 0===r?"":r,l=e.size,c=void 0===l?24:l,i=e.children;return(0,a.jsxs)(o.Z,{sx:{width:"100%",textAlign:"center",height:"20vh"},children:[(0,a.jsxs)(o.Z,{sx:{width:"100%",textAlign:"center",marginTop:function(e){return e.spacing(12)},marginBottom:"32px",display:"flex",justifyContent:"center"},children:[(0,a.jsx)("span",{children:""!==n?n:"Loading..."})," \xa0",(0,a.jsx)(t.Z,{size:c})]}),i]})}},14869:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return oe},default:function(){return te}});var a=n(34051),o=n.n(a),t=n(85893),l=n(67294),c=n(87357),i=n(40044),s=n(88409),p=n(15861),d=n(59111),u=n(16327);var x=n(47426);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){f(e,r,n[r])}))}return e}function g(e,r){var n=(0,l.useState)([]),a=n[0],o=n[1],t=(0,l.useState)(""),c=t[0],i=t[1];return(0,l.useEffect)((function(){if(i(""),e.length>0)try{var n=Object.values(x.re).reduce((function(n,a){return m({},n,f({},a.code,e[0][a.code].split(",").map((function(e){return"none"===e?"cropCalnocolor":"cropCal".concat(r[e].index)}))))}),{}),a=Object.values(x.re).reduce((function(n,a){return m({},n,f({},a.code,e[1][a.code].split(",").map((function(e){return"none"===e?"cropCalnocolor":"cropCal".concat(r[e].index)}))))}),{});o([n,a])}catch(t){i(t.message)}else o([])}),[e,r]),{stagesforviz:a,error:c}}var h=n(32848);function b(e,r,n,a,o,t,l){try{var c=e[t](l),i=c.value}catch(s){return void n(s)}c.done?r(i):Promise.resolve(i).then(a,o)}function v(e){var r=(0,l.useState)([]),n=r[0],a=r[1],t=(0,l.useState)(!1),c=t[0],i=t[1],s=(0,l.useState)(""),p=s[0],d=s[1];return(0,l.useEffect)((function(){var r=function(){var r,n=(r=o().mark((function r(){var n,t,l,c,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i(!0),r.next=4,(0,h.ih)(e);case 4:n=r.sent,i(!1),d(""),a(null!==(t=null===n||void 0===n?void 0:n.data)&&void 0!==t?t:[]),r.next=19;break;case 11:r.prev=11,r.t0=r.catch(0),s=null!==(c=null===r.t0||void 0===r.t0||null===(l=r.t0.response)||void 0===l?void 0:l.data)&&void 0!==c?c:r.t0.message,d(s),i(!1),a([]);case 19:case"end":return r.stop()}}),r,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var t=r.apply(e,n);function l(e){b(t,a,o,l,c,"next",e)}function c(e){b(t,a,o,l,c,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();e&&(d(""),r())}),[e]),{cropcalendar:n,loading:c,error:p}}var C=n(59390),j=n(23766),y=n(38885),S=n(45697),P=n.n(S),k=n(98396),Z=n(76295),w=n(66242),O=n(37634),A=n(94054),_=n(86886),E=n(47312),N=n(18972),L=n(18360),T=n(61903),I=n(53577),R={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCalprep":{backgroundColor:"#ffd966"},"& .cropCalgrow":{backgroundColor:"#375623"},"& .cropCalharv":{backgroundColor:"#203764"},"& .cropCalplant":{backgroundColor:"#a9d08e"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCalprep:"#ffd966",cropCalgrow:"#375623",cropCalharv:"#203764",cropCalplant:"#a9d08e",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};var B=function(){return(0,t.jsxs)(_.ZP,{container:!0,sx:R.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){return(0,t.jsx)(c.Z,{className:"cal-mo-container",style:{borderRight:"1px solid rgba(0, 0, 0, 0.4)"},children:(0,t.jsx)("div",{className:"cropCalnocolor"})},"cal-mo-itm-".concat(r,"-1"))}))})]})},D={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCal0":{backgroundColor:"#996633"},"& .cropCal1":{backgroundColor:"#CAEDFB"},"& .cropCal2":{backgroundColor:"#DAF2D0"},"& .cropCal3":{backgroundColor:"#B5E6A2"},"& .cropCal4":{backgroundColor:"#8ED973"},"& .cropCal5":{backgroundColor:"#3C7D22"},"& .cropCal6":{backgroundColor:"#104861"},"& .cropCal7":{backgroundColor:"#DC143C"},"& .cropCal8":{backgroundColor:"#4682B4"},"& .cropCal9":{backgroundColor:"#32CD32"},"& .cropCal10":{backgroundColor:"#fcf8e3"},"& .cropCal11":{backgroundColor:"#3498db"},"& .cropCal12":{backgroundColor:"#A1FF33"},"& .cropCal13":{backgroundColor:"#33FFCC"},"& .cropCal14":{backgroundColor:"#ff5733"},"& .cropCal15":{backgroundColor:"#f7ecb5"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCal0:"#996633",cropCal1:"#CAEDFB",cropCal2:"#DAF2D0",cropCal3:"#B5E6A2",cropCal4:"#8ED973",cropCal5:"#3C7D22",cropCal6:"#104861",cropCal7:"#DC143C",cropCal8:"#4682B4",cropCal9:"#32CD32",cropCal10:"#fcf8e3",cropCal11:"#3498db",cropCal12:"#A1FF33",cropCal13:"#33FFCC",cropCal14:"#ff5733",cropCal15:"#f7ecb5",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};function z(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function F(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){z(e,r,n[r])}))}return e}function M(e){var r=e.optsprovinces,n=e.optsmunicipalities,a=e.subcalendar,o=e.processedCalendar,l=e.cropStages,i=e.cropList,s=e.sel_options,d=e.loading,u=e.onSelectItemChange,f=Object.values(l).sort((function(e,r){return e.index-r.index})),m=(0,k.Z)("(max-width:600px)");return(0,t.jsxs)(w.Z,{variant:"outlined",sx:D.card,children:[(0,t.jsxs)(_.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",sx:{marginBottom:"48px"},children:[(0,t.jsx)(_.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(p.Z,{variant:"h6",children:"Location Selector"}),(0,t.jsx)(Z.Z,{disablePortal:!0,id:"province",size:"small",value:s.sel_province,disabled:0===r.length||d,options:r,renderInput:function(e){return(0,t.jsx)(T.Z,F({},e,{label:0===r.length?"Loading...":"Select a province"}))},isOptionEqualToValue:function(e,r){return e.label===r},onChange:function(e,r){return u(e,F({},r,{from:"province"}))}}),(0,t.jsx)(Z.Z,{disablePortal:!0,id:"municipality",size:"small",value:s.sel_municipality,disabled:0===n.length||d,options:n,sx:D.autoMuni,renderInput:function(e){return(0,t.jsx)(T.Z,F({},e,{label:null===s.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,r){return e.label===r},getOptionDisabled:function(e){return e.disabled},onChange:function(e,r){return u(e,F({},r,{from:"municipality"}))}})]})}),(0,t.jsx)(_.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(p.Z,{variant:"h6",children:"Crop Type"}),(0,t.jsx)(c.Z,{sx:{maxWidth:300},children:(0,t.jsxs)(A.Z,{fullWidth:!0,children:[(0,t.jsx)(E.Z,{id:"demo-simple-select-label",children:"Crop Type"}),(0,t.jsx)(L.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.sel_crop,label:"Crop Type",onChange:function(e){u(e,{label:e.target.value,from:e.target.value})},children:[{value:"Rice",label:"Rice"},{value:"Pili",label:"Pili"},{value:"Corn",label:"Corn"},{value:"Ampalaya",label:"Ampalaya"},{value:"PoleSitao",label:"PoleSitao"},{value:"Cassava",label:"Cassava"},{value:"Coconut",label:"Coconut"},{value:"Pineapple",label:"Pineapple"},{value:"Abaca",label:"Abaca"},{value:"Cutflowers",label:"Cut-Flowers"},{value:"Livestock",label:"Livestock"},{value:"Poultry",label:"Poultry"},{value:"Fisheries",label:"Fisheries (brackish and freshwater)"}].map((function(e){return(0,t.jsx)(N.Z,{disabled:!i.includes(e.value),value:e.value,children:e.label},e.value)}))})]})})]})})]}),d&&""===s.error?(0,t.jsx)(I.Z,{text:"Loading data..."}):""!==s.error?(0,t.jsx)(O.Z,{message:"Error loading data."}):null!==a&&void 0!==a||null===s.sel_municipality||null===s.sel_province?null!==a&&0!==o.length?(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(_.ZP,{container:!0,sx:D.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem",children:(0,t.jsx)(p.Z,{variant:"subtitle1",children:(0,t.jsx)("strong",{children:"Crop Name"})})}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){return(0,t.jsx)(c.Z,{className:"monthlabels",children:m?(0,t.jsx)("span",{children:e.format.substring(0,1)}):(0,t.jsx)("span",{children:e.format.substring(0,3)})},"cal-mo-".concat(r))}))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(B,{}),(0,t.jsxs)(_.ZP,{container:!0,sx:D.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname",children:s.sel_crop}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){var n=o[0][e.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",a=D.calendar.cellBorderColor[o[0][e.code][0]],l=D.calendar.cellBorderColor[o[0][e.code][1]];return(0,t.jsxs)(c.Z,{className:"cal-mo-container",style:{borderRight:""!==n?n:(null===l||void 0===l?void 0:l.includes("#f7f7ff"))?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(l)},children:[(0,t.jsx)("div",{style:{backgroundColor:a||"#f7f7ff"}}),(0,t.jsx)("div",{style:{backgroundColor:l||"#f7f7ff"}})]},"cal-mo-itm-".concat(r,"-1"))}))})]}),(0,t.jsxs)(_.ZP,{container:!0,sx:D.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname"}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",style:{borderTop:"1px solid black"},children:Object.values(x.re).map((function(e,r){var n=o[1][e.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",a=D.calendar.cellBorderColor[o[1][e.code][0]],l=D.calendar.cellBorderColor[o[1][e.code][1]];return(0,t.jsxs)(c.Z,{className:"cal-mo-container",style:{borderRight:""!==n?n:(null===l||void 0===l?void 0:l.includes("#f7f7ff"))?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(l)},children:[(0,t.jsx)("div",{style:{backgroundColor:a||"#f7f7ff"}}),(0,t.jsx)("div",{style:{backgroundColor:l||"#f7f7ff"}})]},"cal-mo-itm-".concat(r,"-1"))}))})]}),(0,t.jsx)(B,{})]}),(0,t.jsxs)(_.ZP,{container:!0,style:{marginTop:"32px"},children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsxs)(_.ZP,{item:!0,xs:10,md:9,sx:D.legend,className:"calendar-header-months",children:[(0,t.jsx)("strong",{children:"Legend"}),(0,t.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:f.map((function(e){return(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:D.calendar.cellBorderColor["cropCal".concat(e.index)]}}),e.label]},e.index)}))})]})]})]}):(0,t.jsx)(c.Z,{sx:D.infoMsg,children:"Please select a province and a municipality."}):(0,t.jsx)(c.Z,{sx:D.infoMsg,children:"Data for the requested resource is not yet available."})]})}M.propTypes={optsprovinces:P().array,optsmunicipalities:P().array,subcalendar:P().array,processedCalendar:P().array,cropStages:P().oneOfType([P().array,P().object]),cropList:P().array,sel_options:P().object,loading:P().bool,onSelectItemChange:P().func};var W=M,U={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCalprep":{backgroundColor:"#ffd966"},"& .cropCalgrow":{backgroundColor:"#375623"},"& .cropCalharv":{backgroundColor:"#203764"},"& .cropCalplant":{backgroundColor:"#a9d08e"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCalprep:"#ffd966",cropCalgrow:"#375623",cropCalharv:"#203764",cropCalplant:"#a9d08e",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};var V=function(){return(0,t.jsxs)(_.ZP,{container:!0,sx:U.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){return(0,t.jsx)(c.Z,{className:"cal-mo-container",style:{borderRight:"1px solid rgba(0, 0, 0, 0.4)"},children:(0,t.jsx)("div",{className:"cropCalnocolor"})},"cal-mo-itm-".concat(r,"-1"))}))})]})},H={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCal0":{backgroundColor:"#996633"},"& .cropCal1":{backgroundColor:"#CAEDFB"},"& .cropCal2":{backgroundColor:"#DAF2D0"},"& .cropCal3":{backgroundColor:"#B5E6A2"},"& .cropCal4":{backgroundColor:"#8ED973"},"& .cropCal5":{backgroundColor:"#3C7D22"},"& .cropCal6":{backgroundColor:"#104861"},"& .cropCal7":{backgroundColor:"#DC143C"},"& .cropCal8":{backgroundColor:"#4682B4"},"& .cropCal9":{backgroundColor:"#32CD32"},"& .cropCal10":{backgroundColor:"#fcf8e3"},"& .cropCal11":{backgroundColor:"#3498db"},"& .cropCal12":{backgroundColor:"#A1FF33"},"& .cropCal13":{backgroundColor:"#33FFCC"},"& .cropCal14":{backgroundColor:"#ff5733"},"& .cropCal15":{backgroundColor:"#f7ecb5"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCal0:"#996633",cropCal1:"#CAEDFB",cropCal2:"#DAF2D0",cropCal3:"#B5E6A2",cropCal4:"#8ED973",cropCal5:"#3C7D22",cropCal6:"#104861",cropCal7:"#DC143C",cropCal8:"#4682B4",cropCal9:"#32CD32",cropCal10:"#fcf8e3",cropCal11:"#3498db",cropCal12:"#A1FF33",cropCal13:"#33FFCC",cropCal14:"#ff5733",cropCal15:"#f7ecb5",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};function q(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){q(e,r,n[r])}))}return e}function G(e){var r=e.optsprovinces,n=e.subcalendar,a=e.processedCalendar,o=e.cropStages,l=e.cropList,i=e.sel_options,s=e.loading,d=e.onSelectItemChange,u=Object.values(o).sort((function(e,r){return e.index-r.index})),f=(0,k.Z)("(max-width:600px)");return(0,t.jsxs)(w.Z,{variant:"outlined",sx:H.card,children:[(0,t.jsxs)(_.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",sx:{marginBottom:"48px"},children:[(0,t.jsx)(_.ZP,{item:!0,xs:12,md:4,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(p.Z,{variant:"h6",children:"Location Selector"}),(0,t.jsx)(Z.Z,{disablePortal:!0,id:"province",size:"small",value:i.sel_province,disabled:0===r.length||s,options:r,renderInput:function(e){return(0,t.jsx)(T.Z,Y({},e,{label:0===r.length?"Loading...":"Select a province"}))},isOptionEqualToValue:function(e,r){return e.label===r},onChange:function(e,r){return d(e,Y({},r,{from:"province"}))}})]})}),(0,t.jsx)(_.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(p.Z,{variant:"h6",children:"Crop Type"}),(0,t.jsx)(c.Z,{sx:{maxWidth:300},children:(0,t.jsxs)(A.Z,{fullWidth:!0,children:[(0,t.jsx)(E.Z,{id:"demo-simple-select-label",children:"Crop Type"}),(0,t.jsx)(L.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i.sel_crop,label:"Crop Type",onChange:function(e){d(e,{label:e.target.value,from:e.target.value})},children:[{value:"Rice",label:"Rice"},{value:"Pili",label:"Pili"},{value:"Corn",label:"Corn"},{value:"Ampalaya",label:"Ampalaya"},{value:"PoleSitao",label:"PoleSitao"},{value:"Cassava",label:"Cassava"},{value:"Coconut",label:"Coconut"},{value:"Pineapple",label:"Pineapple"},{value:"Abaca",label:"Abaca"},{value:"Cutflowers",label:"Cut-Flowers"},{value:"Livestock",label:"Livestock"},{value:"Poultry",label:"Poultry"},{value:"Fisheries",label:"Fisheries (brackish and freshwater)"}].map((function(e){return(0,t.jsx)(N.Z,{disabled:!l.includes(e.value),value:e.value,children:e.label},e.value)}))})]})})]})})]}),s&&""===i.error?(0,t.jsx)(I.Z,{text:"Loading data..."}):""!==i.error?(0,t.jsx)(O.Z,{message:"Error loading data."}):null!==n&&void 0!==n||null===i.sel_municipality||null===i.sel_province?null!==n&&0!==a.length?(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(_.ZP,{container:!0,sx:H.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem",children:(0,t.jsx)(p.Z,{variant:"subtitle1",children:(0,t.jsx)("strong",{children:"Crop Name"})})}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){return(0,t.jsx)(c.Z,{className:"monthlabels",children:f?(0,t.jsx)("span",{children:e.format.substring(0,1)}):(0,t.jsx)("span",{children:e.format.substring(0,3)})},"cal-mo-".concat(r))}))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(V,{}),(0,t.jsxs)(_.ZP,{container:!0,sx:H.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname",children:i.sel_crop}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(x.re).map((function(e,r){var n=a[0][e.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",o=H.calendar.cellBorderColor[a[0][e.code][0]],l=H.calendar.cellBorderColor[a[0][e.code][1]];return(0,t.jsxs)(c.Z,{className:"cal-mo-container",style:{borderRight:""!==n?n:(null===l||void 0===l?void 0:l.includes("#f7f7ff"))?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(l)},children:[(0,t.jsx)("div",{style:{backgroundColor:o||"#f7f7ff"}}),(0,t.jsx)("div",{style:{backgroundColor:l||"#f7f7ff"}})]},"cal-mo-itm-".concat(r,"-1"))}))})]}),(0,t.jsxs)(_.ZP,{container:!0,sx:H.calendar,children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname"}),(0,t.jsx)(_.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",style:{borderTop:"1px solid black"},children:Object.values(x.re).map((function(e,r){var n=a[1][e.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",o=H.calendar.cellBorderColor[a[1][e.code][0]],l=H.calendar.cellBorderColor[a[1][e.code][1]];return(0,t.jsxs)(c.Z,{className:"cal-mo-container",style:{borderRight:""!==n?n:(null===l||void 0===l?void 0:l.includes("#f7f7ff"))?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(l)},children:[(0,t.jsx)("div",{style:{backgroundColor:o||"#f7f7ff"}}),(0,t.jsx)("div",{style:{backgroundColor:l||"#f7f7ff"}})]},"cal-mo-itm-".concat(r,"-1"))}))})]}),(0,t.jsx)(V,{})]}),(0,t.jsxs)(_.ZP,{container:!0,style:{marginTop:"32px"},children:[(0,t.jsx)(_.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,t.jsxs)(_.ZP,{item:!0,xs:10,md:9,sx:H.legend,className:"calendar-header-months",children:[(0,t.jsx)("strong",{children:"Legend"}),(0,t.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:u.map((function(e){return(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{style:{backgroundColor:H.calendar.cellBorderColor["cropCal".concat(e.index)]}}),e.label]},e.index)}))})]})]})]}):(0,t.jsx)(c.Z,{sx:H.infoMsg,children:"No available data."}):(0,t.jsx)(c.Z,{sx:H.infoMsg,children:"Data for the requested resource is not yet available."})]})}G.propTypes={optsprovinces:P().array,optsmunicipalities:P().array,subcalendar:P().array,processedCalendar:P().array,cropStages:P().oneOfType([P().array,P().object]),cropList:P().array,sel_options:P().object,loading:P().bool,onSelectItemChange:P().func};var K=G,X=n(43370);function Q(e,r,n,a,o,t,l){try{var c=e[t](l),i=c.value}catch(s){return void n(s)}c.done?r(i):Promise.resolve(i).then(a,o)}function $(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function J(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){$(e,r,n[r])}))}return e}function ee(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var re={RICE:"Rice",PILI:"Pili",CORN:"Corn",AMPALAYA:"Ampalaya",POLE_SITAO:"PoleSitao",CASSAVA:"Cassava",COCONUT:"Coconut",PINEAPPLE:"Pineapple",ABACA:"Abaca",CUT_FLOWERS:"Cut-flowers",LIVESTOCK:"Livestock",POULTRY:"Poultry",FISHERIES:"Fisheries (brackish and freshwater)"},ne={sel_province:null,sel_municipality:null,sel_crop:re.RICE,error:""},ae={sel_province:null,sel_crop:re.RICE,error:""};var oe=!0,te=function(e){var r=e.media,n=function(e){var r=e.children,n=e.value,a=e.index,o=ee(e,["children","value","index"]);return(0,t.jsx)("div",J({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},o,{children:n===a&&(0,t.jsx)(c.Z,{children:r})}))},a=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},x=(0,l.useState)(0),f=x[0],m=x[1],h=(0,l.useState)([]),b=h[0],S=h[1],P=(0,l.useState)(ne),k=P[0],Z=P[1],w=(0,l.useState)(ae),O=w[0],A=w[1],_=(0,l.useState)([]),E=_[0],N=_[1],L=(0,l.useState)([]),T=L[0],I=L[1],R=(0,l.useState)([]),B=R[0],D=R[1],z=(0,j.Z)(k.sel_province,b),F=v(k.sel_province),M=F.cropcalendar,U=F.error,V=(0,y.Z)().cropList,H=(0,C.Z)("10-day",k.sel_province,k.sel_crop),q=H.cropcalendar,Y=H.cropStages,G=H.loading,$=(0,C.Z)("seasonal",k.sel_province,k.sel_crop),oe=$.cropcalendar,te=$.cropStages,le=$.loading,ce=function(e,r){var n=(0,l.useState)([]),a=n[0],o=n[1];return(0,l.useEffect)((function(){if(e&&r){var n=e&&r?e.filter((function(e){return e.municipality===r})).map((function(e){return e.crop})).filter((function(e,r,n){return n.indexOf(e)===r})).map((function(e,r){return{id:r,label:e,disabled:!1}})):[];o(n)}r||o([])}),[e,r]),a}(M,k.sel_municipality),ie=g(E,Y),se=ie.stagesforviz,pe=ie.error,de=g(T,te),ue=de.stagesforviz,xe=de.error,fe=(0,l.useState)(!0),me=fe[0],ge=fe[1],he=(0,l.useCallback)((function(e){var r,n;if(null===q||void 0===q||null===(r=q.data1)||void 0===r||r.forEach((function(r,a){r.municipality===e&&r.crop===k.sel_crop&&(n={calendar:r,index:a})})),n){var a=n.calendar,o=q.data2[n.index];N([a,o])}else N([])}),[q,k.sel_crop]);(0,l.useEffect)((function(){if(Object.keys(oe).length){var e=[oe.data1[0],oe.data2[0]];I(e)}else I([])}),[oe,O.sel_crop]),(0,l.useEffect)((function(){var e=function(){var e,r=(e=o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.$m)();case 3:r=e.sent,S(r.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var r=this,n=arguments;return new Promise((function(a,o){var t=e.apply(r,n);function l(e){Q(t,a,o,l,c,"next",e)}function c(e){Q(t,a,o,l,c,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){if(b.length>0){var e=(0,d.m)(b);D(e),Z((function(r){return J({},r,{sel_province:e[0].label})})),A((function(r){return J({},r,{sel_province:e[0].label})}))}}),[b]),(0,l.useEffect)((function(){var e,r,n;z.length>0&&(null===(e=q.data1)||void 0===e?void 0:e.length)>0&&k.sel_province===(null!==(n=null===(r=q.data1[0])||void 0===r?void 0:r.province)&&void 0!==n?n:"")&&(he(z[0].label),Z((function(e){return J({},e,{sel_municipality:z[0].label})})))}),[z,q,he,k.sel_province]),(0,l.useEffect)((function(){ge(G||le)}),[G,le]),(0,l.useEffect)((function(){if(""!==U||""!==pe||""!==xe){var e=U||pe,r=xe;Z((function(r){return J({},r,{error:e})})),A((function(e){return J({},e,{error:r})}))}else Z((function(e){return J({},e,{error:""})})),A((function(e){return J({},e,{error:""})}))}),[U,pe,xe]);var be=function(e,r){var n=r.label,a=r.from;if(""!==k.error&&Z(J({},k,{error:""})),void 0!==n)switch(a){case"province":N([]),I([]),Z(J({},ne,{sel_crop:k.sel_crop,sel_province:n})),A(J({},ae,{sel_crop:k.sel_crop,sel_province:n}));break;case"municipality":he(n),Z(J({},k,{sel_municipality:n}));break;case re.RICE:case re.PILI:case re.CORN:case re.POLE_SITAO:case re.AMPALAYA:case re.WATERMELON:case re.LOWLAND_VEGETABLES:case re.CASSAVA:case re.COCONUT:case re.PINEAPPLE:case re.ABACA:case re.CUT_FLOWERS:case re.LIVESTOCK:case re.POULTRY:case re.FISHERIES:N([]),I([]),Z(J({},k,{sel_crop:a})),A(J({},k,{sel_crop:a}))}else"province"===a?(Z(ne),A(ae)):"municipality"===a&&Z(J({},k,{sel_municipality:null,sel_crop:null}))};return(0,t.jsxs)("div",{id:"bacap-cropping-calendar",children:[(0,t.jsx)(X.Z,{title:"Agro-Climatic Advisory Portal - MIMAROPA (ACAP-MIMAROPA) Cropping Calendar",ogDescription:r.description,ogImageURL:r.url,ogURL:r.path,canonicalURL:r.path}),(0,t.jsx)(p.Z,{variant:"h4",children:"Cropping Calendar"}),(0,t.jsxs)(c.Z,{sx:{width:"100%",marginTop:"20px"},children:[(0,t.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,t.jsxs)(s.Z,{value:f,onChange:function(e,r){m(r)},"aria-label":"basic tabs example",children:[(0,t.jsx)(i.Z,J({label:"MUNICIPAL"},a(0))),(0,t.jsx)(i.Z,J({label:"PROVINCIAL"},a(1)))]})}),(0,t.jsx)(n,{value:f,index:0,children:(0,t.jsx)(W,{optsprovinces:B,optsmunicipalities:z,subcalendar:E,processedCalendar:se,cropList:V,cropStages:Y,optscrops:ce,sel_options:k,loading:me,onSelectItemChange:be})}),(0,t.jsx)(n,{value:f,index:1,children:(0,t.jsx)(K,{optsprovinces:B,subcalendar:T,processedCalendar:ue,cropList:V,cropStages:te,optscrops:ce,sel_options:O,loading:me,onSelectItemChange:be})})]})]})}},38885:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var a=n(34051),o=n.n(a),t=n(67294),l=n(32848);function c(e,r,n,a,o,t,l){try{var c=e[t](l),i=c.value}catch(s){return void n(s)}c.done?r(i):Promise.resolve(i).then(a,o)}function i(){var e=(0,t.useState)([]),r=e[0],n=e[1],a=(0,t.useState)(!1),i=a[0],s=a[1],p=(0,t.useState)(""),d=p[0],u=p[1];return(0,t.useEffect)((function(){var e=function(){var e,r=(e=o().mark((function e(){var r,a,t,c,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,(0,l.TQ)();case 4:r=e.sent,n(null!==(a=null===r||void 0===r?void 0:r.list)&&void 0!==a?a:[]),s(!1),u(""),e.next=19;break;case 11:e.prev=11,e.t0=e.catch(0),i=null!==(c=null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t?void 0:t.data)&&void 0!==c?c:e.t0.message,u(i),s(!1),n([]);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var r=this,n=arguments;return new Promise((function(a,o){var t=e.apply(r,n);function l(e){c(t,a,o,l,i,"next",e)}function i(e){c(t,a,o,l,i,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();e()}),[]),{cropList:r,loading:i,error:d}}},59390:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var a=n(34051),o=n.n(a),t=n(67294),l=n(32848);function c(e,r,n,a,o,t,l){try{var c=e[t](l),i=c.value}catch(s){return void n(s)}c.done?r(i):Promise.resolve(i).then(a,o)}function i(e,r,n){var a=(0,t.useState)([]),i=a[0],s=a[1],p=(0,t.useState)([]),d=p[0],u=p[1],x=(0,t.useState)(!1),f=x[0],m=x[1],g=(0,t.useState)(""),h=g[0],b=g[1];return(0,t.useEffect)((function(){var a=function(){var a,t=(a=o().mark((function a(){var t,c,i,p,d,x,f;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m(!0),a.next=4,(0,l.ad)(e,r,n);case 4:return t=a.sent,s(null!==(c=null===t||void 0===t?void 0:t.data)&&void 0!==c?c:[]),a.next=9,(0,l.Fj)(e,n);case 9:i=a.sent,u(null!==(p=null===i||void 0===i?void 0:i.data)&&void 0!==p?p:[]),m(!1),b(""),a.next=24;break;case 16:a.prev=16,a.t0=a.catch(0),f=null!==(x=null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d?void 0:d.data)&&void 0!==x?x:a.t0.message,b(f),m(!1),s([]);case 24:case"end":return a.stop()}}),a,null,[[0,16]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var t=a.apply(e,r);function l(e){c(t,n,o,l,i,"next",e)}function i(e){c(t,n,o,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();r&&n&&(b(""),s([]),u([]),a())}),[e,r,n]),{cropcalendar:i,cropStages:d,loading:f,error:h}}},23766:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var a=n(67294);function o(e,r){var n=(0,a.useState)([]),o=n[0],t=n[1];return(0,a.useEffect)((function(){var n,a;t(e&&r&&null!==(a=null===(n=r.find((function(r){return r.label===e})))||void 0===n?void 0:n.municipalities)&&void 0!==a?a:[])}),[e,r]),o}},59111:function(e,r,n){"use strict";n.d(r,{m:function(){return a}});var a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return e.map((function(e,n){return{id:n,label:e[r]}}))}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6295,6572,4987,9774,2888,179],(function(){return r=41938,e(e.s=r);var r}));var r=e.O();_N_E=r}]);