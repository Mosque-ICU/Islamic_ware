import React from "react";
import styled from "styled-components";
import Image from "next/image";

// import Arrow from 'src/assets/icons/arrow.svg'

const SidebarItemDiv = styled.div<{ visible?: boolean; height?: string }>`
  height: ${(props) => (props.visible && props.height && props.height !== "full" ? `${props.height}` : "auto")};
  flex: ${(props) => (props.visible && props.height && props.height === "full" ? `1` : "unset")};
  color: #545454;
  border-radius: 6px;
`;

const Chevron = styled.a<{ visible: boolean }>`
  transform: rotate(${(props) => (props.visible ? 180 : 0)}deg);
  svg {
    width: 8px;
    height: 8px;
  }
`;

export type SidebarItemProps = {
  title: string;
  height?: string;
  icon: string;
  visible?: boolean;
  onChange?: (bool: boolean) => void;
  children?: React.ReactNode;
};

const HeaderDiv = styled.div`
  color: #615c5c;
  height: 45px;
  svg {
    fill: #707070;
  }
`;

export const SidebarItem: React.FC<SidebarItemProps> = ({ visible, icon, title, children, height, onChange }) => {
  return (
    <SidebarItemDiv visible={visible} height={height} className="flex flex-col rounded shadow-sm mb-1 border border-gray-100  hover:border-indigo-200">
      <HeaderDiv
        onClick={() => {
          if (onChange) onChange(!visible);
        }}
        className={`flex cursor-pointer items-center rounded bg-white px-2 last:border-b-0 ${visible ? "shadow-sm" : ""}`}
      >
        <div className="flex flex-1 items-center">
          {/* {React.createElement(icon, {
            className: "w-4 h-4 mr-2 text-gray-500  ",
            style: { fill: "rgb(79 70 229)" },
          })} */}
          {/* <Image style={{ fill: "rgb(79 70 229)" }} src={icon} alt={title} width={20} height={20} className="mr-2 text-gray-300 bg-white" /> */}
          <h2 className=" text-sm font-semibold  ">{title}</h2>
        </div>
        <Chevron visible={visible}>
          <Image src="/icons/arrow.svg" alt="arrow" width={8} height={8} />
        </Chevron>
      </HeaderDiv>
      {visible ? <div className="w-full flex-1 overflow-auto slideInDown">{children}</div> : null}
    </SidebarItemDiv>
  );
};
