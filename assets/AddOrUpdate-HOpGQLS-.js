import{r as n,A as k,j as e,F as v,B as R,P as T,ab as x}from"./index-DvF7C6Fs.js";import{s as N,I as z}from"./index-hKWNT_my.js";import{T as B,M as L}from"./Table-B7-iN7md.js";function U({data:t,addOrUpdateFunction:r,formFields:h,onClose:i}){const{session:d}=n.useContext(k),l=n.useRef();l.current&&!t&&l.current.resetFields(),n.useEffect(()=>{l.current.resetFields()},[t]);const m=async s=>{const c={...t,...s,estado:s.estado?1:0,id_usuario:d&&d.id_usuario};r(c).then(o=>{o.err?N.error(o.message):N.success(o.message)}).finally(()=>i())};return e.jsxs(v,{layout:"vertical",onFinish:m,ref:l,initialValues:t&&t,children:[h.map((s,c)=>e.jsx(v.Item,{label:s.label,name:s.name,rules:s.rules,valuePropName:s.valuePropName,children:s.component},c)),e.jsx("div",{className:"flex-end",children:e.jsx(R,{className:"button-submit",type:"default",htmlType:"submit",children:"Guardar"})})]})}function V({pageSize:t,object:r,columns:h,title:i,rowKey:d,addOrUpdateFunction:l,formFields:m,filterBy:s}){const{loading:c,getAll:o}=n.useContext(T),[b,u]=n.useState(!1),[g,p]=n.useState(null),[j,y]=n.useState(1),C=(j-1)*t,M=C+t,[S,w]=n.useState(""),A=()=>{p(null),u(!1)},E=()=>{u(!1),p(null),o()},I=a=>{p(a),u(!0)},P=a=>{w(a.target.value)},f=r&&r.filter(a=>a[s].toLowerCase().includes(S.toLowerCase())),F=f==null?void 0:f.slice(C,M);return e.jsxs("div",{className:"h-screen px-[5%] py-[5%]",children:[e.jsx("div",{className:"title-1 flex-between",children:e.jsx("span",{children:i})}),e.jsxs("div",{className:"flex-between",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex-center gap-5",children:[e.jsx(x.reload,{size:25,onClick:()=>o(),className:"cursor-pointer"}),e.jsx(z.Search,{onChange:P})," ",e.jsx("button",{onClick:()=>u(!0),children:e.jsx(x.add,{size:25,color:"white",className:"bg-[#1f2937] bg-hover-3 rounded-full"})})]}),e.jsx("div",{className:"bg-white rounded-md p-2 hover:bg-gray-200 cursor-pointer ",children:e.jsx(x.excel,{color:"green",size:25})})]}),e.jsx(B,{className:"mt-5",dataSource:F,loading:c,rowKey:d,columns:[...h,{title:"Editar",render:(a,O)=>e.jsx("strong",{className:"cursor-pointer",onClick:()=>I(O),children:e.jsx(x.edit,{className:"hover:text-gray-500 ",size:20})})}],pagination:{onChange:a=>y(a),pageSize:t,current:j,total:(r==null?void 0:r.length)||0}}),e.jsx(L,{open:b,footer:null,onCancel:()=>A(),title:e.jsxs("div",{children:[g?"Editar":"Crear"," ",i," "]}),width:300,centered:!0,children:e.jsx(U,{data:g,addOrUpdateFunction:l,formFields:m,onClose:()=>E()})})]})}export{V as A};
