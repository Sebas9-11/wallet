import styled from "styled-components";
import { Box } from "../../components/layouts";
import { colors, boxShadows } from "../../constants";

export const Container = styled(Box)`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background.black};
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 1024px) {
  }
`;

export const LeftContainer = styled(Box)`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    margin: 0px 0px 10px 0px;
    flex-direction: column;
    background-color: ${colors.grayScale.lightGray};
  }
  @media (min-width: 640px) {
    display: flex;
    border-radius: 20px;
    width: min(100%, 400px);
    height: min(100%, 700px);
    margin: 0px 10px;
    justify-content: center;
    background-color: ${colors.grayScale.lightGray};
    border: 2px solid ${colors.grayScale.gray};
  }
  @media (min-width: 1024px) {
    display: flex;
    border-radius: 10px;
    width: min(100%, 400px);
    height: min(100%, 700px);
    margin: 0px 10px;
  }
`;

export const RightContainer = styled(Box)`
  @media (max-width: 640px) {
    background-color: ${colors.grayScale.lightGray};
    width: 100%;
    height: 100%;
  }
  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: min(100%, 900px);
    height: min(100%, 700px);
    background-color: ${colors.grayScale.lightGray};
    border: 2px solid ${colors.grayScale.gray};
    margin: 0px 10px;
  }
  @media (min-width: 1024px) {
  }
`;
