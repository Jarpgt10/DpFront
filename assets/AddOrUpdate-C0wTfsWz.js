import{r as n,A as k,j as e,P as R,I as f}from"./index-Dyw-6YHK.js";import{F as v,B as T,s as N,I as B}from"./index-DXXKSB0o.js";import{T as L,M as U}from"./Table-CumLv_PU.js";function _({data:t,addOrUpdateFunction:r,formFields:x,onClose:i}){const{session:d}=n.useContext(k),l=n.useRef();l.current&&!t&&l.current.resetFields(),n.useEffect(()=>{l.current.resetFields()},[t]);const h=async s=>{const c={...t,...s,estado:s.estado?1:0,id_usuario:d&&d.id_usuario};r(c).then(o=>{o.err?N.error(o.message):N.success(o.message)}).finally(()=>i())};return e.jsxs(v,{layout:"vertical",onFinish:h,ref:l,initialValues:t&&t,children:[x.map((s,c)=>e.jsx(v.Item,{label:s.label,name:s.name,rules:s.rules,valuePropName:s.valuePropName,children:s.component},c)),e.jsx("div",{className:"flex-end",children:e.jsx(T,{className:"button-submit",type:"default",htmlType:"submit",children:"Guardar"})})]})}function V({pageSize:t,object:r,columns:x,title:i,rowKey:d,addOrUpdateFunction:l,formFields:h,filterBy:s}){const{loading:c,getAll:o}=n.useContext(R),[M,u]=n.useState(!1),[C,m]=n.useState(null),[j,y]=n.useState(1),g=(j-1)*t,S=g+t,[I,b]=n.useState(""),w=()=>{m(null),u(!1)},A=()=>{u(!1),m(null),o()},E=a=>{m(a),u(!0)},P=a=>{b(a.target.value)},p=r&&r.filter(a=>a[s].toLowerCase().includes(I.toLowerCase())),F=p==null?void 0:p.slice(g,S);return e.jsxs("div",{className:"h-screen px-[5%] py-[5%]",children:[e.jsx("div",{className:"title-1 flex-between",children:e.jsx("span",{children:i})}),e.jsxs("div",{className:"flex-between",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex-center gap-5",children:[e.jsx(f.reload,{size:25,onClick:()=>o(),className:"cursor-pointer"}),e.jsx(B.Search,{onChange:P})," ",e.jsx("button",{onClick:()=>u(!0),children:e.jsx(f.add,{size:25,color:"white",className:"bg-[#1f2937] bg-hover-3 rounded-full"})})]}),e.jsx("div",{})]}),e.jsx(L,{className:"mt-5",dataSource:F,loading:c,rowKey:d,columns:[...x,{title:"Editar",render:(a,O)=>e.jsx("strong",{className:"cursor-pointer",onClick:()=>E(O),children:e.jsx(f.edit,{className:"hover:text-gray-500 ",size:20})})}],pagination:{onChange:a=>y(a),pageSize:t,current:j,total:(r==null?void 0:r.length)||0}}),e.jsx(U,{open:M,footer:null,onCancel:()=>w(),title:e.jsxs("div",{children:[C?"Editar":"Crear"," ",i," "]}),width:300,centered:!0,children:e.jsx(_,{data:C,addOrUpdateFunction:l,formFields:h,onClose:()=>A()})})]})}export{V as A};
