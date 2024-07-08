import{r as g}from"./index-TycLOtu4.js";import{_ as W,u as D,a as A,c as H,b as z,d as X,K as q,g as K,m as R,e as $,r as V,f as _,T as B,C as F,D as G,h as Q,W as J,L as U}from"./index-zPM6drAd.js";var Y=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],N=g.forwardRef(function(e,n){var c,a=e.prefixCls,l=a===void 0?"rc-switch":a,o=e.className,d=e.checked,t=e.defaultChecked,i=e.disabled,r=e.loadingIcon,s=e.checkedChildren,u=e.unCheckedChildren,I=e.onClick,p=e.onChange,w=e.onKeyDown,y=W(e,Y),M=D(!1,{value:d,defaultValue:t}),k=A(M,2),C=k[0],S=k[1];function v(h,f){var b=C;return i||(b=h,S(b),p==null||p(b,f)),b}function x(h){h.which===q.LEFT?v(!1,h):h.which===q.RIGHT&&v(!0,h),w==null||w(h)}function m(h){var f=v(!C,h);I==null||I(f,h)}var E=H(l,o,(c={},z(c,"".concat(l,"-checked"),C),z(c,"".concat(l,"-disabled"),i),c));return g.createElement("button",X({},y,{type:"button",role:"switch","aria-checked":C,disabled:i,className:E,ref:n,onKeyDown:x,onClick:m}),r,g.createElement("span",{className:"".concat(l,"-inner")},g.createElement("span",{className:"".concat(l,"-inner-checked")},s),g.createElement("span",{className:"".concat(l,"-inner-unchecked")},u)))});N.displayName="Switch";const Z=e=>{const{componentCls:n,trackHeightSM:c,trackPadding:a,trackMinWidthSM:l,innerMinMarginSM:o,innerMaxMarginSM:d,handleSizeSM:t,calc:i}=e,r=`${n}-inner`,s=$(i(t).add(i(a).mul(2)).equal()),u=$(i(d).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:l,height:c,lineHeight:$(c),[`${n}-inner`]:{paddingInlineStart:d,paddingInlineEnd:o,[`${r}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${u})`,marginInlineEnd:`calc(100% - ${s} + ${u})`},[`${r}-unchecked`]:{marginTop:i(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:t,height:t},[`${n}-loading-icon`]:{top:i(i(t).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:o,paddingInlineEnd:d,[`${r}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${r}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${u})`,marginInlineEnd:`calc(-100% + ${s} - ${u})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${$(i(t).add(a).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${r}`]:{[`${r}-unchecked`]:{marginInlineStart:i(e.marginXXS).div(2).equal(),marginInlineEnd:i(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${r}`]:{[`${r}-checked`]:{marginInlineStart:i(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:i(e.marginXXS).div(2).equal()}}}}}}},ee=e=>{const{componentCls:n,handleSize:c,calc:a}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:a(a(c).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},ne=e=>{const{componentCls:n,trackPadding:c,handleBg:a,handleShadow:l,handleSize:o,calc:d}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:c,insetInlineStart:c,width:o,height:o,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:d(o).div(2).equal(),boxShadow:l,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${$(d(o).add(c).equal())})`},[`&:not(${n}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},ie=e=>{const{componentCls:n,trackHeight:c,trackPadding:a,innerMinMargin:l,innerMaxMargin:o,handleSize:d,calc:t}=e,i=`${n}-inner`,r=$(t(d).add(t(a).mul(2)).equal()),s=$(t(o).mul(2).equal());return{[n]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:o,paddingInlineEnd:l,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${r} - ${s})`,marginInlineEnd:`calc(100% - ${r} + ${s})`},[`${i}-unchecked`]:{marginTop:t(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${i}`]:{paddingInlineStart:l,paddingInlineEnd:o,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${r} + ${s})`,marginInlineEnd:`calc(-100% + ${r} - ${s})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:t(a).mul(2).equal(),marginInlineEnd:t(a).mul(-1).mul(2).equal()}},[`&${n}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:t(a).mul(-1).mul(2).equal(),marginInlineEnd:t(a).mul(2).equal()}}}}}},ae=e=>{const{componentCls:n,trackHeight:c,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},V(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:c,lineHeight:`${$(c)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),_(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},te=e=>{const{fontSize:n,lineHeight:c,controlHeight:a,colorWhite:l}=e,o=n*c,d=a/2,t=2,i=o-t*2,r=d-t*2;return{trackHeight:o,trackHeightSM:d,trackMinWidth:i*2+t*4,trackMinWidthSM:r*2+t*2,trackPadding:t,handleBg:l,handleSize:i,handleSizeSM:r,handleShadow:`0 2px 4px 0 ${new B("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:i/2,innerMaxMargin:i+t+t*2,innerMinMarginSM:r/2,innerMaxMarginSM:r+t+t*2}},ce=K("Switch",e=>{const n=R(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ae(n),ie(n),ne(n),ee(n),Z(n)]},te);var le=function(e,n){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(c[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(c[a[l]]=e[a[l]]);return c};const O=g.forwardRef((e,n)=>{const{prefixCls:c,size:a,disabled:l,loading:o,className:d,rootClassName:t,style:i,checked:r,value:s,defaultChecked:u,defaultValue:I,onChange:p}=e,w=le(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[y,M]=D(!1,{value:r??s,defaultValue:u??I}),{getPrefixCls:k,direction:C,switch:S}=g.useContext(F),v=g.useContext(G),x=(l??v)||o,m=k("switch",c),E=g.createElement("div",{className:`${m}-handle`},o&&g.createElement(U,{className:`${m}-loading-icon`})),[h,f,b]=ce(m),P=Q(a),T=H(S==null?void 0:S.className,{[`${m}-small`]:P==="small",[`${m}-loading`]:o,[`${m}-rtl`]:C==="rtl"},d,t,f,b),j=Object.assign(Object.assign({},S==null?void 0:S.style),i),L=function(){M(arguments.length<=0?void 0:arguments[0]),p==null||p.apply(void 0,arguments)};return h(g.createElement(J,{component:"Switch"},g.createElement(N,Object.assign({},w,{checked:y,onChange:L,prefixCls:m,className:T,style:j,disabled:x,ref:n,loadingIcon:E}))))});O.__ANT_SWITCH=!0;const de=O;export{de as S};
