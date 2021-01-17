import styled from "styled-components";

export default styled.div<{ scroll?: boolean }>`
  display: flex;
  overflow-x: ${(props) => (props.scroll ? "scroll" : "hidden")};
  flex-wrap: nowrap;
`;
