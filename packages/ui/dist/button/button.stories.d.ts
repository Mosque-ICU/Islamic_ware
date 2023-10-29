import * as react_jsx_runtime from 'react/jsx-runtime';
import { Button } from './button.js';

declare const _default: {
    title: string;
    component: typeof Button;
};

interface ButtonProps {
    label: string;
}
declare const ButtonComponent: {
    (args: ButtonProps): react_jsx_runtime.JSX.Element;
    args: {
        label: string;
    };
};

export { ButtonComponent, _default as default };
