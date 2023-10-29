import * as React from 'react';

declare function Button({ title, children, href, }: {
    title: string;
    children: React.ReactNode;
    href: string;
}): JSX.Element;

export { Button };
