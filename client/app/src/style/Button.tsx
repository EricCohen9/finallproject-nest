import styled from "styled-components";
import { Button } from "../types/Button";

const ButtonComp = styled.div<Button>`
  display: flex;
  flex-wrap: ${(props) => props.flexwrap || "nowrap"};
  margin-top: ${(props) => props.top || "0%"};
  margin-right: 0%;
  justify-content: ${(props) => props.content || "baseline"};
  width: ${(props) => props.width || "auto"};
  align-items: normal;
  padding:${(props) => props.padding || "0"}; 
  flex-direction: ${(props) => props.flexDirection || "row"};
  min-height: ${(props) => props.minHeight || "auto"};
  height: ${(props) => props.height || "auto"};
  font-size:${(props) => props.fontSize || "auto"}; ;
  color:${(props) => props.color || "auto"}; 
  border-radius:${(props) => props.borderRadius || "0"}; 
  background-color:${(props) => props.backgroundColor || "0"};
  border:${(props) => props.border || "none"};
  cursor: pointer;
  
`;

export default ButtonComp;
