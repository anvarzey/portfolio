import{r as c}from"./index.03be2d59.js";import{j as e}from"./jsx-runtime.b9e88e07.js";function o(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",className:"h-full w-auto text-slate-100",children:e.jsx("path",{d:"M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"})})}function s(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-star-fill",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})}function m({reviews:a}){const[l,r]=c.useState(0),[i,x]=c.useState(!1),n=t=>{t!==l&&r(t)};return c.useEffect(()=>{x(!0)},[]),e.jsx("div",{className:"grow overflow-hidden",children:e.jsxs("div",{className:"px-10 py-12 h-full bg-c-light-blue rounded-xl text-slate-100 flex flex-col items-center justify-around",children:[e.jsxs("div",{className:"grow w-full flex items-start gap-2",children:[e.jsx("div",{className:"h-10 w-16 text-3xl text-white",children:e.jsx(o,{})}),e.jsxs("div",{className:"grow flex flex-col items-start py-4",children:[e.jsx("p",{className:"mb-4 text-ellipsis max-h-[40%] overflow-hidden w-full text-left md:tracking-wide md:text-lg lg:text-xl",children:i?a[l].review:""}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("h3",{className:"md:text-xl italic",children:i?a[l].client:"Random"}),e.jsxs("div",{className:"flex items-center gap-1 text-c-yellow",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{})]})]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:a.map(t=>e.jsx("button",{className:`w-4 h-4 rounded-full ${l===t.id?"bg-c-yellow":"bg-c-blue"} cursor-pointer`,onClick:()=>n(t.id)},t.id))})]})})}export{m as default};
