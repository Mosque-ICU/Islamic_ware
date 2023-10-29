import { jsxs, jsx } from 'react/jsx-runtime';

function u({title:t,children:i,href:a}){return jsxs("a",{className:"ui-group ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30",href:`${a}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo`,rel:"noopener noreferrer",target:"_blank",children:[jsxs("h2",{className:"ui-mb-3 ui-text-2xl ui-font-semibold",children:[t," ",jsx("span",{className:"ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none",children:"->"})]}),jsx("p",{className:"ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50",children:i})]})}

export { u as a };
