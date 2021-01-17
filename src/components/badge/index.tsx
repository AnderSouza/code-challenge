import styled from "styled-components";

export default styled.div<{ color: string }>`
  width: 56px;
  height: 24px;
  border-radius: 20px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  line-height: 24px;
  background-color: ${(props) => props.color};
`;
