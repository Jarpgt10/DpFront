import{r as a,P as n,j as t,b as s}from"./index-DvF7C6Fs.js";import{A as c}from"./AddOrUpdate-HOpGQLS-.js";import{I as i}from"./index-hKWNT_my.js";import{S as p}from"./index-23V-WCIO.js";import"./Table-B7-iN7md.js";function h(){const{producto:o}=a.useContext(n),r=[{title:"No.",dataIndex:"id_producto",key:"id_producto"},{title:"Producto",dataIndex:"nombre_producto",key:"nombre_producto"},{title:"Estado",dataIndex:"estado",key:"estado",render:(u,e)=>t.jsx("strong",{className:`${parseInt(e.estado)===1?"text-green-600":"text-red-700"}`,children:parseInt(e.estado)===1?"Activo":"Inactivo"})}],d=[{label:"Producto",name:"nombre_producto",rules:[{required:!0,message:"Ingrese producto"}],component:t.jsx(i,{})},{label:"Estado",name:"estado",valuePropName:"checked",component:t.jsx(p,{checkedChildren:"Activo",unCheckedChildren:"Inactivo"})}].filter(Boolean);return t.jsx(t.Fragment,{children:t.jsx(c,{title:"Producto",rowKey:"id_producto",pageSize:10,object:o,columns:r,addOrUpdateFunction:s,formFields:d,filterBy:"nombre_producto"})})}export{h as default};
