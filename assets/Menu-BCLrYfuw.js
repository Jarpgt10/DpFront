import{r as d,P as i,j as e,f as m}from"./index-Dyw-6YHK.js";import{A as c}from"./AddOrUpdate-C0wTfsWz.js";import{I as r}from"./index-DXXKSB0o.js";import{I as l}from"./index-CxVEAFSo.js";import{S as u}from"./index-DVKUXc16.js";import"./Table-CumLv_PU.js";function b(){const{menu:n}=d.useContext(i),o=[{title:"No.",dataIndex:"id_menu_comida",key:"id_menu_comida"},{title:"Menu",dataIndex:"nombre_menu",key:"nombre_menu"},{title:"Precio",dataIndex:"precio",key:"precio",render:(s,t)=>e.jsxs("strong",{children:["Q ",t.precio]})},{title:"Estado",dataIndex:"estado",key:"estado",render:(s,t)=>e.jsx("strong",{className:`${parseInt(t.estado)===1?"text-green-600":"text-red-700"}`,children:parseInt(t.estado)===1?"Activo":"Inactivo"})}],a=[{label:"Menu",name:"nombre_menu",rules:[{required:!0,message:"Ingrese menu"}],component:e.jsx(r,{})},{label:"Detalle",name:"detalle",rules:[{required:!0,message:"Ingrese detalle"}],component:e.jsx(r.TextArea,{})},{label:"Precio",name:"precio",rules:[{required:!0,message:"Ingrese precio"}],component:e.jsx(l,{precision:2})},{label:"Estado",name:"estado",valuePropName:"checked",component:e.jsx(u,{checkedChildren:"Activo",unCheckedChildren:"Inactivo"})}].filter(Boolean);return e.jsx(e.Fragment,{children:e.jsx(c,{title:"Menu",rowKey:"id_menu_comida",object:n,pageSize:10,columns:o,addOrUpdateFunction:m,formFields:a,filterBy:"nombre_menu"})})}export{b as default};
