import React from "react";
import styled from "styled-components";
import User from "./user";
import { Icon } from "@iconify/react";
import gearIcon from "@iconify-icons/bi/gear-fill";
import bellIcon from "@iconify-icons/bi/bell-fill";
import moreIcon from '@iconify-icons/bi/grid-3x3-gap-fill';

import ellipseIcon from "./../../assets/img/ellipse.png";
import userPic from "./../../assets/img/user-pic.png";

const Options = styled.div`
  height: 100%;
  display: flex;
  flex: 0 0 350px;
  justify-content: space-around;
  align-items: center;
`;

const NotificationSign = styled.img`
  position: relative;
  top: -5px;
  left: -7px;
`;

const Bell = ({ hasNotifications }: { hasNotifications?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Icon icon={bellIcon} />
    {hasNotifications && <NotificationSign src={ellipseIcon} />}
  </div>
);

export default () => (
  <Options>
    <Icon icon={gearIcon} />
    <Bell hasNotifications />
    <User name="Felipe" image={userPic} />
    <Icon icon={moreIcon} />
  </Options>
);
