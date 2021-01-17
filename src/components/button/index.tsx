import styled from "styled-components";

type Variant = "primary" | "secondary";

export default styled.button<{ variant: Variant }>`
  min-width: 104px;
  height: 24px;
  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "linear-gradient(93.05deg, #00a3ff 0%, #0057ff 100%)";
      case "secondary":
        return "linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%);";
      default:
        return "linear-gradient(93.05deg, #00a3ff 0%, #0057ff 100%)";
    }
  }};
  border-radius: 20px;
  outline: none;
  border: none;
  box-shadow: none;
  margin-left: 10px;
  color: white;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
`;
