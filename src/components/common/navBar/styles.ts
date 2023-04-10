import styled from "styled-components";
import { Box } from "../../layouts";
import { colors } from "../../../constants";

export const ContainerNavBar = styled(Box)`
  display: flex;
  width: min(100%, 500px);
  height: 80px;
  background-color: ${colors.grayScale.gray};
  border-radius: 0px 18px 0px 20px;
  padding: 0px 20px;
  justify-content: space-between;
  margin-left: 585px;
`;

export const Title = styled.legend``;

export const Section = styled(Box)`
  display: flex;
  height: 100%;
  width: 125px;
  justify-content: center;
  align-items: center;
`;
