import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/ant-design/search-outlined";

const Search = styled.div`
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  flex: 0 0 300px;
  padding: 0px 12.5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  margin-left: 10px;
  &::placeholder {
    color: rgb(191, 192, 196);
  }
`;

export default ({ placeholder }: { placeholder: string }) => (
  <Search>
    <Icon icon={searchIcon} />
    <Input placeholder={placeholder} />
  </Search>
);
