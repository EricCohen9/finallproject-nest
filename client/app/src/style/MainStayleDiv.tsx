import styled from "styled-components";
import { StayleDivs } from "../types/StayleDivs";
const MainStayleDiv = styled.div<StayleDivs>`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  margin-top: ${(props) => props.top || "0%"};
  margin-right: 0%;
  justify-content: ${(props) => props.content || "baseline"};
  width: ${(props) => props.width || "auto"};
  align-items: normal;
  padding: 0%;
  flex-direction: ${(props) => props.flexDirection || "row"};
  min-height:${(props) => props.minHeight || "auto"};
  height${(props) => props.height || "auto"}
`;
export default MainStayleDiv;