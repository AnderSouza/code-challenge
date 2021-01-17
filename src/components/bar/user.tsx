import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import logoutIcon from "@iconify-icons/tabler/logout";

const User = styled.div`
  position: relative;
  cursor: pointer;
`;

const Badge = styled.div`
  min-width: 160px;
  height: 56px;
  background: rgba(47, 68, 134, 0.05);
  border-radius: 50px;
  line-height: 56px;
  padding: 0px 10px;
  position: relative;
`;

const Name = styled.span`
  font-size: 14px;
  line-height: 19px;
  vertical-align: middle;
  padding: 0px 5px;
`;

const Pic = styled.img`
  float: right;
  margin-top: 8px;
`;

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background-color: #ffffff;
  width: 160px;
  margin-top: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 10;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  height: 44px;
  padding: 8px;
`;

const Logout = () => (
  <span>
    <Icon
      icon={logoutIcon}
      className="align-middle"
      style={{ color: "red", marginRight: "5px" }}
    />
    Sair
  </span>
);

export default ({ name, image }: { name: string; image: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  
  return (
    <User onClick={toggleIsOpen}>
      <Badge>
        <Name>
          Olá, <b>{name}</b>
        </Name>
        <Pic src={image} />
      </Badge>
      <Menu isOpen={isOpen}>
        <Item>Minha Conta</Item>
        <Item>Configurações</Item>
        <Item>
          <Logout />
        </Item>
      </Menu>
    </User>
  );
};
