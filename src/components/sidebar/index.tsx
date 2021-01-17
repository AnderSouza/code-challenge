import React from "react";
import styled from "styled-components";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";
import { Icon } from "@iconify/react";
import downloadIcon from "@iconify-icons/gridicons/product-downloadable";
import houseIcon from "@iconify-icons/bi/house-door";
import logo from "./../../assets/img/logo.svg";

const Sidebar = styled.div`
  width: 18%;
  padding-left: 10px;
  flex: 0 0 250px;
`;

const Top = styled.div`
  padding: 50px 0px 25px 0px;
`;

const LogoText = styled.span`
  padding: 0px 10px;
  font-size: 26px;
  line-height: 39px;
  vertical-align: middle;
  color: white;
`;

const Hr = styled.hr`
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  width: 90%;
  height: 1px;
`;

const Body = styled.div`
  padding-top: 25px;
`;

const Item = styled.div`
  width: 100%;
  height: 55px;
  text-decoration-line: none;
`;

const Link = styled.a<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? "#eff2f9" : "transparent")};
  border-radius: 30px 0px 0px 30px;
  padding: 0px 15px;
  height: 48px;
  display: flexbox;
  align-items: center;
  text-decoration-line: none;
  position: relative;
  color: ${(props) => (props.active ? "black" : "white")};
  &::before {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    height: 24px;
    width: 60px;
    background-color: transparent;
    position: absolute;
    right: 0px;
    top: -24px;
    border-bottom-right-radius: 24px;
    box-shadow: 7px 7px 0 0 #eff2f9;
  }
  &::after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    height: 24px;
    width: 60px;
    background-color: transparent;
    position: absolute;
    right: 0px;
    bottom: -24px;
    border-top-right-radius: 24px;
    box-shadow: 7px -7px 0 0 #eff2f9;
  }

  & > * {
    vertical-align: baseline;
  }
`;

const LinkTitle = styled.span`
  padding: 0px 10px;
  font-size: 16px;
  line-height: 24px;
`;

const generateItems = (items: ItemType[]) =>
  items.map((item: ItemType, index: number) => (
    <Item key={index}>
      <RouterLink to={item.link} className="no-decoration">
        <Link active={!!useRouteMatch({ path: item.link, exact: true })}>
          <Icon icon={downloadIcon} />
          <LinkTitle>{item.title}</LinkTitle>
        </Link>
      </RouterLink>
    </Item>
  ));

type ItemType = { title: string; link: string };

const items = [
  { title: "Dashboard", link: "/", icon: <Icon icon={houseIcon} /> },
  {
    title: "Pacientes",
    link: "/patients",
  },
  {
    title: "Testes",
    link: "/tests",
  },
  {
    title: "Configurações",
    link: "/config",
  },
];

export default () => (
  <Sidebar>
    <Top>
      <img className="align-middle" src={logo} />
      <LogoText>
        <span className="bold">IDENT</span>
        <span className="regular">LOGO</span>
      </LogoText>
    </Top>
    <Hr />
    <Body>{generateItems(items)}</Body>
  </Sidebar>
);
