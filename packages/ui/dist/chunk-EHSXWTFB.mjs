import { jsxs, jsx } from 'react/jsx-runtime';

function o({title:t,children:a,href:n}){return jsxs("a",{className:"bg-red-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30",href:`${n}`,rel:"noopener noreferrer",target:"_blank",children:[jsxs("h2",{className:"mb-3 text-2xl font-semibold",children:[t," ",jsx("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),jsx("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:a})]})}

export { o as a };
