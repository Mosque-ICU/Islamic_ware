"use client";
import styled from "styled-components";
import Link from "next/link";
import Spinner from "../Spinner/Spinner";
// import Spinner from 'src/components/Spinner/Spinner'

const Button = (props) => {
  const { to, variant, size, className, children, ref, loading, ...rest } = props;

  let Component;

  switch (variant) {
    case "secondary":
      Component = SecondaryButton;
      break;
    case "icon":
      Component = IconButton;
      break;
    case "link":
      Component = LinkButton;
      break;
    default:
      Component = FillButton;
  }

  if (to) {
    return (
      <Component style={props.style || {}} as={StyledLink} to={to} {...rest} ref={ref}>
        {loading ? <span>loading</span> : children}
      </Component>
    );
  }

  return (
    <Component
      style={props.style || {}}
      className={` ${props.className}  
        ${size === "sm" ? "px-2 py-1 text-sm" : ""}
        ${size === "smd" ? "px-2 py-1.5 text-sm" : ""}

        ${size === "md" ? "text-md px-3 py-1.5" : ""}
        ${size === "lg" ? "px-6 py-3 text-lg" : ""}
        ${size === "auto" || !size ? "px-4 py-2 " : ""} `}
      {...rest}
      ref={ref}
    >
      {loading ? <Spinner /> : children}
    </Component>
  );
};

export default Button;

// Styles

const BaseButton = styled.button`
  border: none;
  border-radius: 6px;
  width: fit-content;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 200ms;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    transform: scale(0.98);
    transition: transform 200ms;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: rgb(224 231 255);
  transition: 500ms;
  color: rgb(55 48 163);

  &:hover {
    filter: brightness(105%);
    transition: filter 200ms;
    background-color: rgb(199 210 254);
    transform: scale(1.02);
    transition: transform 200ms;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    transform: scale(0.98);
    transition: transform 200ms;
  }
`;

const IconButton = styled(BaseButton)`
  background-color: transparent;

  transition: 500ms;

  &:hover {
    background-color: var(--gray-2);
    transition: background-color 200ms;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  & > svg {
    color: var(--primary);
  }
`;

const LinkButton = styled(BaseButton)`
  &:hover {
    text-decoration: underline;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: rgb(79 70 229);
  color: white;

  transition: filter 500ms;

  &:hover {
    cursor: pointer;
    filter: brightness(135%);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    transition: filter 200ms;
  }
`;

const StyledLink = styled(Link)`
  color: var(--link);

  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;
