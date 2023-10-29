type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
};
declare function Button({ className, ...props }: ButtonProps): JSX.Element;

export { Button };
