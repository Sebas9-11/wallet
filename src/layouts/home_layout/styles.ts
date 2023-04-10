import styled from "styled-components";
import { Box } from "../../components/layouts";
import { colors, boxShadows } from "../../constants";

export const Container = styled(Box)`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background.black};
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 740px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1600px) {
  }
`;

export const LeftContainer = styled(Box)`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    margin: 0px 0px 10px 0px;
    flex-direction: column;
    background-color: ${colors.grayScale.lightGray};
    margin: 0px 0px 10px 0px;
  }
  @media screen and (min-width: 740px) {
    display: flex;
    border-radius: 20px;
    width: min(100%, 400px);
    height: min(100%, 200px);
    margin: 0px 10px;
    justify-content: center;
    background-color: ${colors.grayScale.lightGray};
    border: 2px solid ${colors.grayScale.gray};
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    border-radius: 10px;
    width: min(100%, 300px);
    height: min(100%, 600px);
    margin: 0px 10px;
  }
  @media screen and (min-width: 1600px) {
    display: flex;
    border-radius: 10px;
    width: min(100%, 300px);
    height: min(100%, 800px);
    margin: 0px 10px;
  }
`;

export const RightContainer = styled(Box)`
  @media screen and (min-width: 320px) {
    display: flex;
    /* align-items: center; */
    border-radius: 20px;
    width: min(100%, 1123px);
    margin: 0px 10px;
    flex-direction: column;
    background-color: ${colors.grayScale.lightGray};
    border: 2px solid ${colors.grayScale.gray};
  }
  @media screen and (min-width: 740px) {
    display: flex;
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    height: 650px;
  }
  @media screen and (min-width: 1600px) {
    display: flex;
    height: 900px;
  }
`;
