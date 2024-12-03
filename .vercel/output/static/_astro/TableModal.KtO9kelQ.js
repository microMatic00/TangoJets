import{j as e}from"./jsx-runtime.SN7vRHW2.js";import{r as c}from"./index.CMQ3OGCn.js";import{M as y,a as p,B as h}from"./ToggleSwitch.DhlsXv_P.js";import"./index.DqBOCEu-.js";async function k({caseType:r,id:t}){try{const a=await fetch(`http://localhost:3001/${r}/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a}catch(a){throw console.error("Error deleting element:",a),a}}const f=({id:r,caseType:t})=>{const[a,s]=c.useState(!1),l=async()=>{try{await k({caseType:t,id:r}),window.location.reload()}catch(o){console.error("Error:",o)}s(!1)};return e.jsxs("div",{children:[e.jsx("button",{className:"bg-transparent p-2 ml-2",onClick:()=>s(!0),children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-red-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"})})}),e.jsxs(y,{show:a,size:"md",onClose:()=>s(!1),popup:!0,children:[e.jsx(y.Header,{}),e.jsx(y.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(p,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsxs("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:["Are you sure you want to delete this id ",r,"?"]}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(h,{className:"bg-red-600",onClick:l,children:"Yes, I'm sure"}),e.jsx(h,{color:"gray",onClick:()=>s(!1),children:"No, cancel"})]})]})})]})]})},j=()=>e.jsx("div",{className:"flex justify-center items-center border-2 border-white rounded-lg h-[400px] w-[400px]",children:e.jsx("h2",{className:"text-2xl font-bold",children:"There is no data to show"})});async function v({caseType:r,data:t,id:a}){try{t.append("id",a.toString());const s=`http://localhost:3001/${r}`;let l;r==="airship"?l=t:l=JSON.stringify(Object.fromEntries(t));const o=await fetch(s,{method:"PUT",body:l,headers:r!=="airship"?{"Content-Type":"application/json"}:void 0});if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const d=await o.text();return d?JSON.parse(d):{}}catch(s){throw console.error("Error editing element:",s),s}}const w=({formData:r,handleChange:t,handleEdit:a,setOpenModal:s})=>e.jsx("div",{id:"editClientModal",tabIndex:-1,"aria-hidden":"true",className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-50",children:e.jsx("div",{className:"relative w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[e.jsxs("div",{className:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Edit Client"}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>s(!1),children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-6 space-y-6",children:e.jsxs("form",{id:"editClientForm",onSubmit:a,children:[e.jsxs("div",{className:"h-fit mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"firstname",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"First Name"}),e.jsx("input",{type:"text",id:"firstname",name:"firstname",value:r.firstname,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"lastname",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Last Name"}),e.jsx("input",{type:"text",id:"lastname",name:"lastname",value:r.lastname,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phonenumber",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Phone"}),e.jsx("input",{type:"tel",id:"phonenumber",name:"phonenumber",value:r.phonenumber,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"documentType",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Document Type"}),e.jsxs("select",{id:"typeid",name:"typeid",value:r.typeid,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,children:[e.jsx("option",{value:"DNI",children:"DNI"}),e.jsx("option",{value:"Passport",children:"Passport"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"identification",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Document Number"}),e.jsx("input",{type:"text",id:"identification",name:"identification",value:r.identification,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:r.title,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Address"}),e.jsx("input",{type:"text",id:"address",name:"address",value:r.address,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Company"}),e.jsx("input",{type:"text",id:"company",name:"company",value:r.company,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]})]}),e.jsxs("div",{className:"flex justify-start items-center py-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600",children:[e.jsx("button",{id:"submitEdit",type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Edit Client"}),e.jsx("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:()=>s(!1),children:"Cancel"})]})]})})]})})}),N=({formData:r,handleChange:t,handleEdit:a,setOpenModal:s})=>e.jsx("div",{id:"editJetModal",tabIndex:-1,"aria-hidden":"true",className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-50",children:e.jsx("div",{className:"relative w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[e.jsxs("div",{className:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Edit Jet"}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>s(!1),children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-6 space-y-6",children:e.jsxs("form",{id:"addJetForm",onSubmit:a,children:[e.jsxs("div",{className:"h-fit mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Jet Title"}),e.jsx("input",{type:"text",id:"title",name:"title",value:r.title,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Status"}),e.jsx("input",{type:"text",id:"status",name:"status",value:r.status,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pricepermile",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Price per Mile"}),e.jsx("input",{type:"number",id:"pricepermile",name:"pricepermile",value:r.pricepermile,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"seats",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Seats"}),e.jsx("input",{type:"number",id:"seats",name:"seats",value:r.seats,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"size",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Size"}),e.jsx("input",{type:"text",id:"size",name:"size",value:r.size,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"images",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Images"}),e.jsx("input",{type:"file",id:"images",name:"images",multiple:!0,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]})]}),e.jsxs("div",{className:"flex justify-start items-center py-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600",children:[e.jsx("button",{id:"submitJet",type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Edit Airship"}),e.jsx("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:()=>s(!1),children:"Cancel"})]})]})})]})})}),C=({formData:r,handleChange:t,handleEdit:a,setOpenModal:s})=>e.jsx("div",{id:"editFlightModal",tabIndex:-1,"aria-hidden":"true",className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-50",children:e.jsx("div",{className:"relative w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[e.jsxs("div",{className:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Edit Flight"}),e.jsxs("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>s(!1),children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-6 space-y-6",children:e.jsxs("form",{id:"editFlightForm",onSubmit:a,children:[e.jsxs("div",{className:"h-fit mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"launchtime",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Launch Time"}),e.jsx("input",{type:"datetime-local",id:"launchtime",name:"launchtime",value:r.launchtime,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"arrivaltime",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Arrival Time"}),e.jsx("input",{type:"datetime-local",id:"arrivaltime",name:"arrivaltime",value:r.arrivaltime,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"to",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"To"}),e.jsx("input",{type:"text",id:"to",name:"to",value:r.to,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"from",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"From"}),e.jsx("input",{type:"text",id:"from",name:"from",value:r.from,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"airship_id",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Airship ID"}),e.jsx("input",{type:"number",id:"airship_id",name:"airship_id",value:r.airship_id,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"createdby",className:"block text-sm font-medium text-gray-900 dark:text-gray-200",children:"Created By"}),e.jsx("input",{type:"number",id:"createdby",name:"createdby",value:r.createdby,onChange:t,className:"block w-full px-4 py-2 mt-1 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",required:!0})]})]}),e.jsxs("div",{className:"flex justify-start items-center py-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600",children:[e.jsx("button",{id:"submitEdit",type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Edit Flight"}),e.jsx("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:()=>s(!1),children:"Cancel"})]})]})})]})})}),F=({id:r,caseType:t,data:a})=>{const[s,l]=c.useState(!1),[o,d]=c.useState(a),i=async g=>{g.preventDefault();const x=g.currentTarget,m=new FormData(x),u=x.querySelector('input[name="images"]');if(u?.files)for(let b=0;b<u.files.length;b++)m.append("images",u.files[b]);try{await v({caseType:t,data:m,id:r}).then(()=>window.location.reload())}catch(b){console.error("Error:",b)}l(!1)},n=g=>{const{name:x,value:m}=g.target;d(u=>({...u,[x]:m,id:r}))};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"bg-transparent p-2",onClick:()=>l(!0),children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"})})}),s&&(t==="airship"?e.jsx(N,{formData:o,handleChange:n,handleEdit:i,setOpenModal:l}):t==="flight"?e.jsx(C,{formData:o,handleChange:n,handleEdit:i,setOpenModal:l}):t==="client"?e.jsx(w,{formData:o,handleChange:n,handleEdit:i,setOpenModal:l}):null)]})},S=({info:r,caseType:t})=>{const[a,s]=c.useState(r),[l,o]=c.useState(!1);return c.useEffect(()=>{s(r),o(window.location.pathname==="/History")},[r]),e.jsx("div",{className:"relative overflow-x-auto overflow-y-auto max-h-[800px] w-full max-w-[100%] shadow-md sm:rounded-lg",children:a.length>0?e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"sticky top-0 text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[Object.entries(a[0]).map(([d,i],n)=>e.jsx("th",{scope:"col",className:"px-6 py-3",children:d},n)),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:a.map(d=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[Object.entries(d).map(([i,n])=>e.jsx("td",{className:"px-6 py-3 whitespace-nowrap",children:n},i)),e.jsxs("td",{className:"px-6 py-3 flex whitespace-nowrap",children:[!l&&e.jsx(F,{id:d.id,caseType:t,data:d}),e.jsx(f,{id:d.id,caseType:t})]})]},d.id))})]}):e.jsx(j,{})})};export{S as default};