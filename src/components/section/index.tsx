import styled from "styled-components";

export default styled.div<{ color: string }>`
  margin: 10px 5px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  display: flex;
  &:hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
  overflow-y: visible;
`;
