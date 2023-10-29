import * as React from 'react';

declare function Card({ title, children, href, }: {
    title: string;
    children: React.ReactNode;
    href: string;
}): JSX.Element;

export { Card };
