import{r as p,P as c,j as t,S as r,e as u}from"./index-DvF7C6Fs.js";import{A as l}from"./AddOrUpdate-HOpGQLS-.js";import{I as o}from"./index-BEq8KZeE.js";import"./index-hKWNT_my.js";import"./Table-B7-iN7md.js";function j(){const{inventario:a,producto:d,proveedor:n}=p.useContext(c),i=[{title:"No.",dataIndex:"id_inventario",key:"id_inventario",sorter:(e,m)=>e.id_inventario-m.id_inventario},{title:"Producto",dataIndex:"nombre_producto",key:"nombre_producto"},{title:"Proveedor",dataIndex:"nombre_proveedor",key:"nombre_proveedor"},{title:"Cantidad",dataIndex:"cantidad",key:"cantidad"},{title:"Cant Optima",dataIndex:"cantidad_optima",key:"cantidad_optima"}],s=[{label:"Producto",name:"id_producto",rules:[{required:!0,message:"Ingrese Producto"}],component:t.jsx(r,{children:d.map(e=>t.jsx(r.Option,{value:e.id_producto,children:e.nombre_producto}))})},{label:"Proveedor",name:"id_proveedor",rules:[{required:!0,message:"Ingrese proveedor"}],component:t.jsx(r,{children:n.map(e=>t.jsx(r.Option,{value:e.id_proveedor,children:e.nombre_proveedor}))})},{label:"Cantidad",name:"cantidad",rules:[{required:!0,message:"Ingrese cantidad"}],component:t.jsx(o,{})},{label:"Cantidad Optima",name:"cantidad_optima",rules:[{required:!0,message:"Ingrese cantidad Optima"}],component:t.jsx(o,{min:1})}].filter(Boolean);return t.jsx(l,{title:"Inventario",rowKey:"id_inventario",columns:i,object:a,pageSize:10,formFields:s,addOrUpdateFunction:u,filterBy:"nombre_producto"})}export{j as default};
