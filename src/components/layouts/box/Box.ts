import { ReactNode } from "react";
import styled from "styled-components";
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  color,
  compose,
  layout,
  space,
} from "styled-system";

interface IBoxProps extends LayoutProps, ColorProps, SpaceProps {
  children: ReactNode;
}

const Box = styled.div<IBoxProps>(compose(color, layout, space));

export default Box;
