import { StayleDivs } from "../types/StayleDivs";
import styled, { css } from "styled-components";
const MainStayleDiv = styled.div<StayleDivs>`
  ${props => css`
    display: flex;
    flex-wrap: ${props.flexwrap || "nowrap"};
    margin-top: ${props.top || "0%"};
    margin-right: 0%;
    justify-content: ${props.content || "baseline"};
    width: ${props.width || "auto"};
    align-items: normal;
    padding: 0%;
    flex-direction: ${props.flexDirection || "row"};
    min-height: ${props.minHeight || "auto"};
    height: ${props.height || "auto"};
  `}
`;
export default MainStayleDiv;
