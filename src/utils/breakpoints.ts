import { css } from "styled-components";
import type { CSSProp} from "styled-components";
import { isDesktop, isMobile} from "react-device-detect";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mobile = (str: CSSProp = css``): any => {
    return isMobile ? str : css``;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const desktop = (str: CSSProp = css``): any =>  {
    return isDesktop ? str : css``;
};