import{r as p,P as l,j as t,S as o,D as u,e as v,f as a}from"./index-DAciIoZG.js";import{A as _}from"./AddOrUpdate-Ciz3FXvV.js";import{I as n}from"./index-BjZzfjI2.js";import"./index-DyyB1ZxX.js";import"./index-Dgy6gC5J.js";function j(){const{inventario:i,producto:d,proveedor:c}=p.useContext(l),s=[{title:"No.",dataIndex:"id_inventario",key:"id_inventario",sorter:(e,r)=>e.id_inventario-r.id_inventario},{title:"Producto",dataIndex:"nombre_producto",key:"nombre_producto"},{title:"Proveedor",dataIndex:"nombre_proveedor",key:"nombre_proveedor"},{title:"Cantidad",dataIndex:"cantidad",key:"cantidad"},{title:"Cant Optima",dataIndex:"cantidad_optima",key:"cantidad_optima"},{title:"Fecha vencimiento",dataIndex:"fecha_vencimiento",key:"fecha_vencimiento",sorter:(e,r)=>a(e.fecha_vencimiento).unix()-a(r.fecha_vencimiento).unix()},{title:"Valor",render:(e,r)=>t.jsxs("strong",{children:[" Q ",e.precio*e.cantidad," "]})}],m=[{label:"Producto",name:"id_producto",rules:[{required:!0,message:"Ingrese Producto"}],component:t.jsx(o,{children:d.map(e=>t.jsx(o.Option,{value:e.id_producto,children:e.nombre_producto}))})},{label:"Proveedor",name:"id_proveedor",rules:[{required:!0,message:"Ingrese proveedor"}],component:t.jsx(o,{children:c.map(e=>t.jsx(o.Option,{value:e.id_proveedor,children:e.nombre_proveedor}))})},{label:"Cantidad",name:"cantidad",rules:[{required:!0,message:"Ingrese cantidad"}],component:t.jsx(n,{})},{label:"Cantidad Optima",name:"cantidad_optima",rules:[{required:!0,message:"Ingrese cantidad Optima"}],component:t.jsx(n,{min:1})},{label:"precio",name:"precio",rules:[{required:!0,message:"Ingrese precio"}],component:t.jsx(n,{min:1})},{label:"Fecha Vencimiento",name:"fecha_vencimiento",rules:[{required:!0,message:"Fecha Vencimiento"}],component:t.jsx(u,{})}].filter(Boolean);return t.jsx(_,{title:"Inventario",rowKey:"id_inventario",columns:s,object:i,pageSize:10,formFields:m,addOrUpdateFunction:v,filterBy:"nombre_producto"})}export{j as default};
