import{r as n,P as a,j as e,d as s}from"./index-BHcsccWt.js";import{A as i}from"./AddOrUpdate-bER6ObRA.js";import{I as p}from"./index-CKklSKz3.js";import{S as m}from"./index-BR--k-Oq.js";import"./Table-BSw4Egfi.js";function h(){const{proveedor:o}=n.useContext(a),t=[{title:"No.",dataIndex:"id_proveedor",key:"id_proveedor"},{title:"Proveedor",dataIndex:"nombre_proveedor",key:"nombre_proveedor"},{title:"Estado",render:(c,r)=>e.jsx("strong",{className:`${parseInt(r.estado)===1?"text-green-600":"text-red-700"}`,children:parseInt(r.estado)===1?"Activo":"Inactivo"})}],d=[{label:"Proveedor",name:"nombre_proveedor",rules:[{required:!0,message:"Ingrese proveedor"}],component:e.jsx(p,{})},{label:"Estado",name:"estado",valuePropName:"checked",component:e.jsx(m,{checkedChildren:"Activo",unCheckedChildren:"Inactivo"})}].filter(Boolean);return e.jsx(e.Fragment,{children:e.jsx(i,{title:"Proveedor",rowKey:"id_proveedor",object:o,pageSize:10,columns:t,addOrUpdateFunction:s,formFields:d,filterBy:"nombre_proveedor"})})}export{h as default};
